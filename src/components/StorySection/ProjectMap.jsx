import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Circle, Polyline, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet marker icon asset paths in React builds
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Custom project site marker icon (Gold home icon with pulse)
const createProjectMarker = () => {
  return L.divIcon({
    className: 'custom-map-marker project-marker',
    html: `
      <div class="marker-pin-wrapper">
        <div class="marker-pin-pulse"></div>
        <div class="marker-pin-core">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </div>
      </div>
    `,
    iconSize: [52, 52],
    iconAnchor: [26, 26],
    popupAnchor: [0, -26]
  });
};

// Custom POI marker icon (Teardrop landmark pin with category icon support)
const createPoiMarker = (isHighlighted) => {
  return L.divIcon({
    className: `custom-map-marker poi-marker ${isHighlighted ? 'active-highlight' : ''}`,
    html: `
      <div class="custom-map-pin-svg">
        ${isHighlighted ? '<div class="poi-pin-light-pulse"></div>' : ''}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 30" class="poi-svg-marker">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" class="pin-path" />
          <circle cx="12" cy="9" r="3" class="pin-dot" />
        </svg>
      </div>
    `,
    iconSize: [34, 42],
    iconAnchor: [17, 42],
    popupAnchor: [0, -38]
  });
};

// Component to dynamically fit/zoom map bounds strictly focusing on local category locations
function ChangeView({ center, activeLocations, categoryId }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;
    map.invalidateSize();

    // Collect all points for active category: Project Center + Landmarks
    const points = [[center[0], center[1]]];
    if (activeLocations && activeLocations.length > 0) {
      activeLocations.forEach(loc => {
        if (loc.lat && loc.lng) {
          points.push([loc.lat, loc.lng]);
        }
      });
    }

    if (points.length > 1) {
      const bounds = L.latLngBounds(points);
      // Tightly focus only on the neighborhood locations
      map.fitBounds(bounds, {
        padding: [45, 45],
        maxZoom: 14.5,
        animate: true,
        duration: 1.0
      });
    } else {
      map.flyTo(center, 13.6, { duration: 1.0 });
    }
  }, [categoryId, activeLocations, center, map]);

  return null;
}

// Interaction listener helper
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

export default function ProjectMap({ 
  activeCategory, 
  projectCoords, 
  projectName, 
  activeLocationName, 
  onHoverLocation, 
  onPinHoverChange,
  onInteraction,
  mapStyle = 'streets-v12'
}) {
  // Coordinates for Medavakkam/Santhosapuram Main Road, Chennai
  const centerCoords = projectCoords || [12.9175, 80.1915];
  const activeLocations = activeCategory ? activeCategory.locations : [];

  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN || '';

  // Dynamic Route Coordinates between Project and Hovered Landmark
  const [routeCoordinates, setRouteCoordinates] = useState(null);
  const routeCacheRef = useRef({});

  // Fetch real road route using Mapbox Driving Directions API
  const fetchMapboxRoute = async (targetLoc) => {
    if (!targetLoc || !targetLoc.lat || !targetLoc.lng) return null;
    const startLng = centerCoords[1];
    const startLat = centerCoords[0];
    const endLng = targetLoc.lng;
    const endLat = targetLoc.lat;
    const cacheKey = `${startLat},${startLng}->${endLat},${endLng}`;

    if (routeCacheRef.current[cacheKey]) {
      return routeCacheRef.current[cacheKey];
    }

    const mapboxDirectionsUrl = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLng},${startLat};${endLng},${endLat}?geometries=geojson&overview=full&access_token=${mapboxToken}`;

    try {
      const res = await fetch(mapboxDirectionsUrl);
      const data = await res.json();
      if (data && data.routes && data.routes[0] && data.routes[0].geometry) {
        // Mapbox returns [lng, lat]; Leaflet requires [lat, lng]
        const roadPoints = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
        routeCacheRef.current[cacheKey] = roadPoints;
        return roadPoints;
      }
    } catch (err) {
      console.warn("Mapbox routing fallback:", err);
    }
    return null;
  };

  // Pre-fetch routes for all locations in the active category
  useEffect(() => {
    if (!activeLocations || activeLocations.length === 0) return;
    activeLocations.forEach(loc => {
      fetchMapboxRoute(loc);
    });
  }, [activeLocations, centerCoords]);

  // Set active route when hovered location changes
  useEffect(() => {
    if (!activeLocationName) {
      setRouteCoordinates(null);
      return;
    }

    const targetLoc = activeLocations.find(l => l.name === activeLocationName);
    if (!targetLoc) {
      setRouteCoordinates(null);
      return;
    }

    const startLng = centerCoords[1];
    const startLat = centerCoords[0];
    const endLng = targetLoc.lng;
    const endLat = targetLoc.lat;
    const cacheKey = `${startLat},${startLng}->${endLat},${endLng}`;

    if (routeCacheRef.current[cacheKey]) {
      setRouteCoordinates(routeCacheRef.current[cacheKey]);
    } else {
      fetchMapboxRoute(targetLoc).then(points => {
        if (points) setRouteCoordinates(points);
      });
    }
  }, [activeLocationName, activeLocations, centerCoords]);

  return (
    <div className="project-map-canvas-container">
      <MapContainer
        center={centerCoords}
        zoom={13.2}
        minZoom={12}
        scrollWheelZoom={false}
        className="leaflet-hero-map"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.mapbox.com/about/maps/">Mapbox</a> &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url={`https://api.mapbox.com/styles/v1/mapbox/${mapStyle}/tiles/256/{z}/{x}/{y}?access_token=${mapboxToken}`}
          tileSize={256}
          zoomOffset={0}
          maxZoom={19}
        />

        {/* Subtle Luxury Gold Radius Ring (3km) around Project */}
        <Circle
          center={centerCoords}
          radius={3000}
          pathOptions={{
            color: '#b48564',
            fillColor: '#b48564',
            fillOpacity: 0.04,
            weight: 1.5,
            dashArray: '4, 8'
          }}
        />

        {/* Animated Shortest Route Polyline when Hovering Location */}
        {routeCoordinates && (
          <>
            {/* Outer Glow Route Path */}
            <Polyline
              positions={routeCoordinates}
              pathOptions={{
                color: '#b48564',
                weight: 5,
                opacity: 0.85,
                lineCap: 'round',
                lineJoin: 'round',
                className: 'animated-route-glow'
              }}
            />
            {/* Inner Animated Dashed Flow Line */}
            <Polyline
              positions={routeCoordinates}
              pathOptions={{
                color: '#ffffff',
                weight: 2.5,
                dashArray: '7, 14',
                opacity: 0.95,
                lineCap: 'round',
                lineJoin: 'round',
                className: 'animated-route-dash'
              }}
            />
          </>
        )}
        
        {/* Project Center Marker */}
        <Marker 
          position={centerCoords} 
          icon={createProjectMarker()}
          eventHandlers={{
            mouseover: () => onPinHoverChange && onPinHoverChange(true),
            mouseout: () => onPinHoverChange && onPinHoverChange(false),
          }}
        >
          <Tooltip direction="top" offset={[0, -26]} permanent={true}>
            <div className="project-marker-tooltip">
              <span className="project-marker-name">{projectName || "Crystal Moonlight"}</span>
              <span className="project-marker-tag">PROJECT LOCATION</span>
            </div>
          </Tooltip>
        </Marker>

        {/* Dynamic Category Markers */}
        {activeLocations.map((loc, idx) => {
          if (!loc.lat || !loc.lng) return null;
          const isHighlighted = activeLocationName === loc.name;
          return (
            <Marker 
              key={`${loc.name}-${isHighlighted}`} 
              position={[loc.lat, loc.lng]} 
              icon={createPoiMarker(isHighlighted)}
              eventHandlers={{
                mouseover: () => {
                  onHoverLocation && onHoverLocation(loc.name);
                  onPinHoverChange && onPinHoverChange(true);
                },
                mouseout: () => {
                  onPinHoverChange && onPinHoverChange(false);
                },
                click: () => onHoverLocation && onHoverLocation(loc.name),
              }}
            >
              {isHighlighted && (
                <Tooltip 
                  permanent={true}
                  direction="top" 
                  offset={[0, -36]}
                >
                  <div className="poi-marker-tooltip">
                    <strong>{loc.name}</strong>
                    <span className="poi-dist-badge">{loc.dist}</span>
                  </div>
                </Tooltip>
              )}
            </Marker>
          );
        })}

        <ChangeView 
          center={centerCoords} 
          activeLocations={activeLocations} 
          categoryId={activeCategory ? activeCategory.id : ''} 
        />
        <InteractionDetector onInteraction={onInteraction} />
      </MapContainer>
    </div>
  );
}
