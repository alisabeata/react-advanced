import React from 'react';
import Root from './components/Root';
import store from './redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history} />
      <Root />
    </Provider>
  );
};

export default App;
