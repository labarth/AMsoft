import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { localStorageMiddleware } from 'middleware/localStorageMiddleWare';
import { rootSaga } from '../sagas/getUsersSaga';
import rootReducer from '../rd/rootReducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
  const enhancer = applyMiddleware(logger, sagaMiddleware, thunk, localStorageMiddleware('set'));

  const store = createStore(
    rootReducer,
    composeWithDevTools(enhancer),
  );

  sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('../rd/rootReducer', () => {
      const nextRootReducer = require('../rd/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
