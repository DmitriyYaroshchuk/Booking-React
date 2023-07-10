import { takeEvery } from 'redux-saga/effects';
import destinationsAsyncActions from './asyncActions';
import { callGetDestinationWorker } from './workers/callGetDestinationWorker';

export function* destinationWatcher() {
  yield takeEvery(destinationsAsyncActions.getDestinationsAsync.type, callGetDestinationWorker);
}
