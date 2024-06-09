"use client";

import * as React from "react";
import { Map, FullscreenControl } from "react-map-gl";

function App() {
  return (
    <div className="h-screen">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API}
        initialViewState={{
          longitude: 100.305642,
          latitude: 0.902049,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <FullscreenControl />
      </Map>
    </div>
  );
}

export default App;
