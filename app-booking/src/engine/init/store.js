import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { destinationReducer } from '../core/destinations/slice';

const sagaMiddleware = createSagaMiddleware();
const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history: createBrowserHistory(),
});
export const store = configureStore({
  reducer: {
    router: routerReducer,
    destinations: destinationReducer,
  },
  middleware: () => [sagaMiddleware, routerMiddleware],
});
export const history = createReduxHistory(store);
sagaMiddleware.run(rootSaga);
