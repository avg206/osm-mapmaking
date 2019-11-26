import React, { FC } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const MapView = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoianVub2xhYiIsImEiOiJjaWw5ZzNmbjAwMDQ2d2xsenpucmtodXVmIn0.1wvs6tdJw0m8uK5i8G37cQ',
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
