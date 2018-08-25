import {
  createStore,
  applyMiddleware
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reduxLogger from 'redux-logger';

import reducers from './reducers';
import sagas from './sagas';


const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

if (process.env.NODE_ENV === 'development') {
  middlewares.push(reduxLogger);
}

const getStore = () => {
  const store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  );

  sagaMiddleware.run(sagas);

  return store;
}


export default getStore;
