import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import { destinationsReducer } from '../core/destinations/sliceDestinations';
import { hotelsReducer } from '../core/hotels/sliceHotels';

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
    destinations: destinationsReducer,
    hotels: hotelsReducer,
  },
  middleware: () => [sagaMiddleware, routerMiddleware],
});
export const history = createReduxHistory(store);
sagaMiddleware.run(rootSaga);
