import React, { Dispatch, useContext } from 'react';

import { AppState } from 'types';

import { initialState } from './reducer';

export interface Context {
  state: AppState;
  dispatch: Dispatch<any>;
}

const context: Context = {
  state: initialState,
  dispatch: () => {},
};

export const DataContext = React.createContext(context);

export const useDataContext = (): Context => {
  return useContext<Context>(DataContext);
};
