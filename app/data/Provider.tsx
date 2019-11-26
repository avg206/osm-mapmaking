import React, { useReducer, FC } from 'react';

import { DataContext } from './context';
import { reducer, initialState } from './reducer';

const Provider: FC<{}> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <DataContext.Provider value={{ dispatch, state }}>{children}</DataContext.Provider>;
};

export default Provider;
