import { configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';

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
    // destination,
  },
  middleware: () => [routerMiddleware],
});
export const history = createReduxHistory(store);
