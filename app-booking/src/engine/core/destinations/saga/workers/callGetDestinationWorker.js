import { put, call, delay } from 'redux-saga/effects';
import { setItems, setLoading } from '../../slice';
import { api } from '../../../../config/axios';

export default function* callGetDestinationWorker() {
  try {
    yield put(setLoading(true));
    const { data } = yield call(api.getDestinations);
    yield put(setItems(data));
    yield delay(2000);
    yield put(setLoading(false));
  } catch (e) {
    console.warn(e);
  }
}
