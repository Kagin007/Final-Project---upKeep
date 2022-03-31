import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5kcmV3Z2p1biIsImEiOiJjbDFlMGloamMwZmtzM2NtdWJ1aWxmanl1In0.WZjXE1rRH_wMpe5SY6KSwg";

const coordinates = [
  [-79.404, 43.6816],
  [-79.4081, 43.7629],
  [-79.468, 43.7206],
];

const Map = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(-79.347015);
  const [lat, setLat] = useState(43.65107);
  const [zoom, setZoom] = useState(9);

  // Initialize map when component mounts
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    coordinates.map(feature =>
      new mapboxgl.Marker().setLngLat(feature).addTo(map)
    );

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <div className="sidebarStyle">
        <div>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <div className="map-container" ref={mapContainerRef} />
    </div>
  );
};

export default Map;

// function Map() {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-79.347015);
//   const [lat, setLat] = useState(43.65107);
//   const [zoom, setZoom] = useState(9);
//   useEffect(() => {
//     if (map.current) return; // initialize map only once
//     map.current = new mapboxgl.Map({
//       container: mapContainer.current,
//       style: "mapbox://styles/mapbox/outdoors-v11",
//       center: [lng, lat],
//       zoom: zoom,
//     });

//   });

//   return <div ref={mapContainer} className="map-container" />;
// }

// export default Map;
