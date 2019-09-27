import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import history from '../history';
import { saga } from '../ducks/otherForm';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
        sagaMiddleware,
        thunk,
        logger
      ),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  sagaMiddleware.run(saga);

  window.store = store;

  return store;
}
