
import './App.css';
import * as React from 'react';

import Map,{NavigationControl,Marker} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
function App() {
  return (
    <div className="App">
     <Map
      mapLib={maplibregl}
      initialViewState={{
        longitude:78.042068,
        latitude: 27.173891,
        zoom: 14
      }}
      style={{width: "100vw", height: "100vh"}}
      mapStyle="https://api.maptiler.com/maps/streets/style.json?key=xxfRrdMWJXkyp0aH3bu0"
      >
      <NavigationControl position="top-left"/>
      <Marker longitude={78.042068}
      latitude={27.173891}></Marker>
      color='#61dbfb'
      </Map>
    </div>
  );
}

export default App;
