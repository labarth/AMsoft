import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import rootReducer from '../rd/rootReducer';


export default function configureStore() {
  const enhancer = applyMiddleware(logger);

  const store = createStore(
    rootReducer,
    composeWithDevTools(enhancer),
  );

  if (module.hot) {
    module.hot.accept('../rd/rootReducer', () => {
      const nextRootReducer = require('../rd/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
