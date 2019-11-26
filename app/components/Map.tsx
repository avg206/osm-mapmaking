import React, { FC } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const MapView = ReactMapboxGl({
  accessToken: process.env.JUNO_MAPBOX_KEY,
});

interface MapViewProps {
  center: [number, number];
}

const Map: FC<MapViewProps> = ({ children, ...props }) => {
  return (
    <MapView
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
      {...props}
    />
  );
};

export default Map;
