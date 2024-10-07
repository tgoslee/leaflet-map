import React from 'react';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';


const partners = [
  { city: "Paris", lat: 48.8566, lng: 2.3522 },
  { city: "Chicago", lat: 41.8781, lng: -87.6298 },
  { city: "New York", lat: 40.7128, lng: -74.006 },
  { city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
];

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapWithClusters = () => {
  const mapRef = React.useRef();

  React.useEffect(() => {
    if (!mapRef.current) {
      const map = L.map('map').setView([40, 0], 2);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      const markers = L.markerClusterGroup({
        maxClusterRadius: 100,
        zoomToBoundsOnClick: true,
      });

      partners.forEach((partner) => {
        const marker = L.marker([partner.lat, partner.lng]).bindPopup(
          `<b>${partner.city}</b>`
        );
        markers.addLayer(marker);
      });

      map.addLayer(markers);
      mapRef.current = map;
    }
  }, []);

  return <div id="map" style={{ height: "700px", width: "100%" }}></div>;
};

export default MapWithClusters;
