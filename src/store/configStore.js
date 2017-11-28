import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import promiseMiddleware from '../middleware/promise-middleware';
//import promiseMiddleware from 'redux-promise';
//import promiseMiddleware from 'redux-promise-middleware';

export default function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunkMiddleware, promiseMiddleware()),
  );

  // if (module.hot) {
  //   // Enable Webpack hot module replacement for reducers
  //   module.hot.accept('../reducers', () => {
  //     const nextRootReducer = require('../reducers').default;
  //     store.replaceReducer(nextRootReducer);
  //   });
  // }
  return store;
}
