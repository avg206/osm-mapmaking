import React, { FC, useCallback } from 'react';

import { useDataContext } from 'data/context';
import * as actions from 'data/actions';

import LayerItem from './LayerItem';

const Layers: FC<{}> = () => {
  const { state, dispatch } = useDataContext();

  const handleRemove = useCallback(
    (id) => {
      dispatch(actions.removeLayer(id));
    },
    [dispatch]
  );

  return (
    <div>
      {state.layers.map((layer) => (
        <LayerItem key={layer.id} onRemove={handleRemove} {...layer} />
      ))}
    </div>
  );
};

export default Layers;
