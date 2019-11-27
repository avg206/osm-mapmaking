import React, { FC } from 'react';
import { Source, Layer } from 'react-mapbox-gl';

import { Layer as LayerType } from 'types';

const RoadsLayer: FC<LayerType> = ({ id, geoData, color }) => (
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
        'line-color': color,
        'line-width': 3,
      }}
    />
  </>
);

export default RoadsLayer;
