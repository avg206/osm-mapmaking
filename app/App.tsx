import React from 'react';

import Map from 'components/Map';
import Provider from 'data/Provider';

const App = () => (
  <Provider>
    <Map center={[-104.991531, 39.742043]} />
    {/* UI Components here */}
  </Provider>
);

export default App;
