import uuid from 'uuid/v4';

import { LayerPayload, Layer } from 'types';

import { createAction } from './utils';
import constants from './constants';

export const saveLayer = (payload: LayerPayload) => {
  const data = {
    id: uuid(),
    ...payload,
  };

  return createAction<Layer>(constants.Layers.Save, data);
};
