import React, { FC } from 'react';
import { Source, Layer } from 'react-mapbox-gl';

import { Layer as LayerType } from 'types';

const RoadsLayer: FC<LayerType> = ({ id, geoData }) => (
  <>
    <Source
      id={`${id}-source`}
      geoJsonSource={{
        type: 'geojson',
        data: geoData,
      }}
    />
    <Layer
      id={`${id}-layer`}
      sourceId={`${id}-source`}
      type="line"
      paint={{
        'line-color': 'rgba(255, 0, 0, 1)',
        'line-width': 2,
      }}
    />
  </>
);

export default RoadsLayer;
