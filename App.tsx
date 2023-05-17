import React from 'react';
import AppNavigation from './src/presentation/navigation/AppNavigation';
import {Provider} from 'react-redux';
import {store} from './src/presentation/redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}

export default App;
