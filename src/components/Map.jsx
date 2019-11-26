import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: process.env.JUNO_MAPBOX_KEY,
});

const MapComponent = (props) => {
  return (
    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
      {...props}
    />
  );
};

export default MapComponent;
