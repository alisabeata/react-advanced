import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import history from '../history';

// const enhancer = applyMiddleware(routerMiddleware(history));

// const store = createStore(reducer, enhancer);
// console.log(store);
// window.store = store;

// export default store;

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer(history), // root reducer with router state
    preloadedState,
    compose(
      applyMiddleware(
        routerMiddleware(history), // for dispatching history actions
        // ... other middlewares ...
        thunk,
        logger
      ),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  return store;
}
