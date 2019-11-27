import React, { FC, useEffect } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';

import * as actions from 'data/actions';
import { useDataContext } from 'data/context';

import RoadsLayer from './RoadsLayer';

const MapView = ReactMapboxGl({
  accessToken: '',
});

interface MapViewProps {
  center: [number, number];
}

const geo1Data = require('mocks/geo1.json');
const geo2Data = require('mocks/geo2.json');

const Map: FC<MapViewProps> = ({ children, ...props }) => {
  const { state, dispatch } = useDataContext();

  useEffect(() => {
    dispatch(actions.saveLayer({ name: 'Layer 1', geoData: geo1Data }));
    dispatch(actions.saveLayer({ name: 'Layer 2', geoData: geo2Data }));
  }, []);

  return (
    <MapView
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '100vh',
        width: '100vw',
      }}
      {...props}
    >
      {state.layers.map((layer) => (
        <RoadsLayer key={layer.id} {...layer} />
      ))}
    </MapView>
  );
};

export default Map;
