import { createAction } from '@reduxjs/toolkit';

const destinationsAsyncActions = Object.freeze({
  getDestinationsAsync: createAction('GET_DESTINATION_ASYNC'),
});
export default destinationsAsyncActions;
