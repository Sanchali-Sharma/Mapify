
import './App.css';
import * as React from 'react';

import Map,{NavigationControl,Marker,Popup} from 'react-map-gl';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {Star} from '@mui/icons-material'

function App() {
  const [showPopup, setShowPopup] = React.useState(true);
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
      latitude={27.173891}>
      </Marker>
      {showPopup && (
      <Popup 
        longitude={78.042068} 
        latitude={27.173891}
        anchor="bottom"
        onClose={() => setShowPopup(false)}>
        <div className='card'>
          <label>Place</label>
          <h4 className='place'>Taj Mahal</h4>
          <label>Review</label>
          <p>Beautiful</p>
          <label>Rating</label>
          <div className='stars'>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
          </div>
          <label>Information</label>
          <span className='username'>Created by <b>Sanchali</b></span>
          <span className='date'>1 hour ago</span>
        </div>
      </Popup>)}
      color='#61dbfb'
      </Map>
    </div>
  );
}

export default App;
