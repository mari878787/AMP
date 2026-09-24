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

// Custom project site marker icon (Floating White Image Card Pin)
const createProjectMarker = (name, imageUrl) => {
  const defaultImg = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80";
  const imgSrc = imageUrl || defaultImg;
  const title = name || "The Woods";

  return L.divIcon({
    className: 'custom-map-card-marker',
    html: `
      <div class="map-card-pin">
        <div class="map-card-body">
          <div class="map-card-image-wrap">
            <img src="${imgSrc}" alt="${title}" class="map-card-image" />
          </div>
          <div class="map-card-title">${title}</div>
        </div>
        <div class="map-card-pointer"></div>
        <div class="map-card-anchor-pulse"></div>
      </div>
    `,
    iconSize: [130, 118],
    iconAnchor: [65, 114],
    popupAnchor: [0, -114]
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
          <path d="M12 1C6.48 1 2 5.48 2 11c0 7.5 10 18 10 18s10-10.5 10-18c0-5.52-4.48-10-10-10z" class="pin-path" />
          <circle cx="12" cy="11" r="3.5" class="pin-dot" />
        </svg>
      </div>
    `,
    iconSize: [30, 38],
    iconAnchor: [15, 36.7],
    popupAnchor: [0, -36]
  });
};

// Calculate straight-line geodesic distance in Km between two [lat, lng] points
function calculateDistanceKm(lat1, lon1, lat2, lon2) {
  if (!lat1 || !lon1 || !lat2 || !lon2) return 0;
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

// Ideal maximum zoom for a category based on its maximum location distance in Km
function getCategoryMaxZoom(maxKm) {
  if (maxKm <= 1.0) return 15.6;
  if (maxKm <= 2.2) return 14.8;
  if (maxKm <= 4.5) return 14.0;
  if (maxKm <= 8.0) return 13.0;
  return 12.0;
}

// Component to keep ALL category locations & project center 100% visible on the map canvas
function ChangeView({ center, activeLocations, categoryId, isMapInteracted }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const applyBounds = () => {
      if (!map || isMapInteracted) return;
      map.invalidateSize();

      if (!activeLocations || activeLocations.length === 0) {
        map.flyTo(center, 15, { duration: 0.8 });
        return;
      }

      const validPoints = [center];
      let maxKm = 0;

      activeLocations.forEach(loc => {
        if (loc.lat && loc.lng) {
          validPoints.push([loc.lat, loc.lng]);
          const dist = calculateDistanceKm(center[0], center[1], loc.lat, loc.lng);
          if (dist > maxKm) maxKm = dist;
        }
      });

      const maxZoom = getCategoryMaxZoom(maxKm);
      const isDesktop = typeof window !== 'undefined' && window.innerWidth > 992;

      const bounds = L.latLngBounds(validPoints);

      map.fitBounds(bounds, {
        paddingTopLeft: isDesktop ? [340, 50] : [30, 30],
        paddingBottomRight: [50, 50],
        maxZoom: maxZoom,
        animate: true,
        duration: 0.8
      });
    };

    // Immediate execution
    applyBounds();

    // Secondary execution after layout frames settle
    const t1 = setTimeout(applyBounds, 60);
    const t2 = setTimeout(applyBounds, 250);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [categoryId, activeLocations, center, map, isMapInteracted]);

  return null;
}

// Interaction listener helper (detects only explicit user drag/scroll gestures, not programmatic flyTo/fitBounds)
function InteractionDetector({ onInteraction }) {
  const map = useMap();
  useEffect(() => {
    if (!map || !onInteraction) return;
    const handleManualUserGesture = () => {
      onInteraction();
    };

    // Listen only for explicit manual user drag
    map.on('dragstart', handleManualUserGesture);

    const container = map.getContainer();
    if (container) {
      container.addEventListener('wheel', handleManualUserGesture, { passive: true });
      container.addEventListener('touchstart', handleManualUserGesture, { passive: true });
    }

    return () => {
      map.off('dragstart', handleManualUserGesture);
      if (container) {
        container.removeEventListener('wheel', handleManualUserGesture);
        container.removeEventListener('touchstart', handleManualUserGesture);
      }
    };
  }, [map, onInteraction]);
  return null;
}

export default function ProjectMap({
  activeCategory,
  projectCoords,
  projectName,
  projectImage,
  activeLocationName,
  onHoverLocation,
  onPinHoverChange,
  onInteraction,
  isMapInteracted,
  mapStyle = 'streets-v12'
}) {
  // Coordinates for Medavakkam Crystal Moonlight, Chennai
  const centerCoords = projectCoords || [12.9298995, 80.1954121];
  const activeLocations = activeCategory ? activeCategory.locations : [];

  const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN || 'pk.eyJ1IjoiYWFkaGl0aHlhbW9oYW5wcm9wZXJ0aWVzMjAyNiIsImEiOiJjbXNyaGQ3YWIwMDk3MnlyNWZ2dnBycXViIn0.M6FmIiIlvIbPk3wl6MgvVw';

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
      if (mapboxToken) {
        const res = await fetch(mapboxDirectionsUrl);
        const data = await res.json();
        if (data && data.routes && data.routes[0] && data.routes[0].geometry) {
          // Mapbox returns [lng, lat]; Leaflet requires [lat, lng]
          const roadPoints = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
          routeCacheRef.current[cacheKey] = roadPoints;
          return roadPoints;
        }
      }
    } catch (err) {
      console.warn("Routing fallback:", err);
    }
    // Elegant fallback geodesic connection
    const directPoints = [[startLat, startLng], [endLat, endLng]];
    routeCacheRef.current[cacheKey] = directPoints;
    return directPoints;
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
        zoom={13.6}
        minZoom={11}
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
          icon={createProjectMarker(projectName, projectImage)}
          eventHandlers={{
            mouseover: () => onPinHoverChange && onPinHoverChange(true),
            mouseout: () => onPinHoverChange && onPinHoverChange(false),
          }}
        />

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
          isMapInteracted={isMapInteracted}
        />
        <InteractionDetector onInteraction={onInteraction} />
      </MapContainer>
    </div>
  );
}
