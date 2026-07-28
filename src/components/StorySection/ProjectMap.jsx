import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon asset paths in React builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom project marker icon (Gold home icon)
const createProjectMarker = () => {
  return L.divIcon({
    className: 'custom-map-marker project-marker',
    html: `
      <div class="marker-pin-wrapper">
        <div class="marker-pin-pulse"></div>
        <div class="marker-pin-core">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
    popupAnchor: [0, -20]
  });
};

// Custom POI marker icon (Teardrop default location icon using inline SVG)
const createPoiMarker = (isHighlighted) => {
  return L.divIcon({
    className: `custom-map-marker poi-marker ${isHighlighted ? 'active-highlight' : ''}`,
    html: `
      <div class="custom-map-pin-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" class="poi-svg-marker">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" class="pin-path" />
          <circle cx="12" cy="9" r="3" class="pin-dot" />
        </svg>
      </div>
    `,
    iconSize: [28, 35],
    iconAnchor: [14, 35],
    popupAnchor: [0, -32]
  });
};

// Helper component to auto-pan and zoom the map to fit all active markers
function ChangeView({ center, markers, categoryId }) {
  const map = useMap();
  const centerLat = center ? center[0] : 0;
  const centerLng = center ? center[1] : 0;

  useEffect(() => {
    if (!map) return;
    
    // Force Leaflet to recalculate size and redraw missing tiles
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 250);

    if (markers && markers.length > 0) {
      const bounds = L.latLngBounds([[centerLat, centerLng]]);
      let hasCloseMarkers = false;

      markers.forEach(m => {
        // Only include markers that are within ~22km (0.2 degrees) of the project site
        if (Math.abs(m.lat - centerLat) < 0.2 && Math.abs(m.lng - centerLng) < 0.2) {
          bounds.extend([m.lat, m.lng]);
          hasCloseMarkers = true;
        }
      });

      if (hasCloseMarkers) {
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 15 });
      } else {
        map.setView([centerLat, centerLng], 14);
      }
    } else {
      map.setView([centerLat, centerLng], 14);
    }

    return () => clearTimeout(timer);
  }, [centerLat, centerLng, categoryId, map]);
  return null;
}

// Helper component to detect user dragging or zooming the map
function InteractionDetector({ onInteraction }) {
  const map = useMap();
  useEffect(() => {
    if (!map || !onInteraction) return;
    const handleInteraction = () => {
      onInteraction();
    };
    map.on('movestart zoomstart dragstart', handleInteraction);
    return () => {
      map.off('movestart zoomstart dragstart', handleInteraction);
    };
  }, [map, onInteraction]);
  return null;
}

export default function ProjectMap({ activeCategory, projectCoords, projectName, hoveredLocationName, onInteraction }) {
  // Fallback coordinates: Medavakkam, Chennai (approx 12.915566, 80.183492)
  const centerCoords = projectCoords || [12.915566, 80.183492];
  const activeLocations = activeCategory ? activeCategory.locations : [];

  return (
    <div style={{ width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden' }}>
      <MapContainer
        center={centerCoords}
        zoom={14}
        scrollWheelZoom={true}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          attribution='&copy; Google Maps'
          url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
        />
        
        {/* Project Center Marker */}
        <Marker position={centerCoords} icon={createProjectMarker()}>
          <Tooltip direction="top" offset={[0, -18]}>
            <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 'bold' }}>
              {projectName || "Project Site"}
            </div>
          </Tooltip>
        </Marker>

        {/* Dynamic Category Markers */}
        {activeLocations.map((loc, idx) => {
          if (!loc.lat || !loc.lng) return null;
          const isHighlighted = hoveredLocationName === loc.name;
          return (
            <Marker 
              key={`${idx}-${isHighlighted}`} 
              position={[loc.lat, loc.lng]} 
              icon={createPoiMarker(isHighlighted)}
            >
              <Tooltip 
                permanent={isHighlighted}
                direction="top" 
                offset={[0, -28]}
              >
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px' }}>
                  <strong>{loc.name}</strong><br />
                  <span style={{ color: '#b48564', fontWeight: '500' }}>Distance: {loc.dist}</span>
                </div>
              </Tooltip>
            </Marker>
          );
        })}

        <ChangeView 
          center={centerCoords} 
          markers={activeLocations} 
          categoryId={activeCategory ? activeCategory.id : ''} 
        />
        <InteractionDetector onInteraction={onInteraction} />
      </MapContainer>
    </div>
  );
}
