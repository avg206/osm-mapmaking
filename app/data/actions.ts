import uuid from 'uuid/v4';

import { LayerPayload, Layer } from 'types';

import { createAction } from './utils';
import constants from './constants';

let index = 0;

const COLORS = [
  'rgb(255, 0, 0)',
  'rgb(0, 255, 0)',
  'rgb(0, 0, 255)',
  'rgb(0, 125, 125)',
  'rgb(125, 125, 0)',
  'rgb(125, 0, 125)',
  'rgb(0, 0, 0)',
];

export const saveLayer = (payload: LayerPayload) => {
  const data = {
    id: uuid(),
    color: COLORS[index],
    ...payload,
  };

  index = (index + 1) % COLORS.length;

  return createAction<Layer>(constants.Layers.Save, data);
};

export const removeLayer = (id: string) => createAction<string>(constants.Layers.Remove, id);
