import React from 'react';

import Provider from 'data/Provider';
import Map from './components/Map';
import GeoForm from './components/GeoForm';

const App = () => (
  <Provider>
    <Map center={[-104.991531, 39.742043]} />
    <GeoForm />
  </Provider>
);

export default App;
