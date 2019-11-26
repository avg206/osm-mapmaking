import produce from 'immer';

import { Reducer, AppState } from 'types';

export const createReducer: Reducer<AppState> = (handlers) => (state, action) => {
  if (handlers[action.type]) {
    return produce(handlers[action.type])(state, action);
  }

  return state;
};

export const createAction = <T>(type: string, payload: T) => ({
  type,
  payload,
});
