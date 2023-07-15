import { all, call } from 'redux-saga/effects';
import destinationWatcher from '../core/destinations/saga/watcher';
import hotelsWatcher from '../core/hotels/saga/watcher';

export default function* rootSaga() {
  yield all([
    call(destinationWatcher),
    call(hotelsWatcher),
  ]);
}
