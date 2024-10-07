import React from 'react';
import MapWithClusters from './MapWithClusters';
import './App.css';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';



function App() {
  return (
    <div className="App">
      <MapWithClusters />
    </div>
  );
}

export default App;
