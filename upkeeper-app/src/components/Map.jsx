import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: 43.65,
  lng: -79.34
};

const position = {
  lat: 43.65,
  lng: -79.34
}

const onLoad = marker => {
  console.log('marker: ', marker)
}

function MyComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCHZCtPtNRRCw6FVIZFbLosbMb5hdwW0Y4"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        ref={props.onMapLoad}
        mapContainerStyle={containerStyle}
        center={center} //change based on city
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={position}
        />
        <Marker
          position={{lat: 42.65,lng: -78.34}}
        />

      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent)

// import React, {useState} from 'react';
// import Map from 'react-map-gl';

// function Map() {
//   const [viewport, setViewport] = useState({
//     latitude: 45.4211,
//     longitude: -75.6903,
//     zoom: 10
//   })

//   return (
//     <Map
//       initialViewState={...viewport}
//       mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//       style={{width: 600, height: 400}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//       onViewportChange={(viewport)=>{
//         setViewport(viewport)
//       }}
//     />
//   );
// }