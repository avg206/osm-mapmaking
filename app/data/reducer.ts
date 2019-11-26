import { AppState } from 'types';

import constants from './constants';
import { createReducer } from './utils';

export const initialState: AppState = {
  layers: [],
};

export const reducer = createReducer({
  [constants.Layers.Save]: (state, action) => {
    state.layers.push(action.payload);
  },
});
