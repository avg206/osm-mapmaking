import React from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoianVub2xhYiIsImEiOiJjaWw5ZzNmbjAwMDQ2d2xsenpucmtodXVmIn0.1wvs6tdJw0m8uK5i8G37cQ',
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
