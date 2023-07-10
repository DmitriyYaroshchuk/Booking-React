import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import destinations from '../core/destinations/slice';

const {
  createReduxHistory,
  routerMiddleware,
  routerReducer,
} = createReduxHistoryContext({
  history: createBrowserHistory(),
});
const sagaMiddleware = createSagaMiddleware({

});
export const store = configureStore({
  reducer: {
    router: routerReducer,
    destinations,
    // hotels,
  },
  middleware: () => [routerMiddleware, sagaMiddleware],
});
export const history = createReduxHistory(store);
sagaMiddleware.run(rootSaga);
