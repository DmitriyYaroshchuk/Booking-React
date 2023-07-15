import { takeEvery } from 'redux-saga/effects';
import { hotelsAsyncActions } from './asyncActions';
import { callGetHotelsWorker } from './workers/callGetHotelsWorker';

export default function* hotelsWatcher() {
  yield takeEvery(hotelsAsyncActions.getHotelsAsync.type, callGetHotelsWorker);
}
