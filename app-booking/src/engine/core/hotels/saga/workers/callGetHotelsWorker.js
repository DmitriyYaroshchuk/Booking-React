import { delay, put, call } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import { links } from '../../../../config/routers';
import { setItems, setLoading } from '../../sliceHotels';
import { api } from '../../../../config/axios';

export function* callGetHotelsWorker() {
  try {
    yield put(setLoading(true));
    const { data, status } = yield call(api.getHotels);
    if (status === 200) {
      yield put(setItems(data));
      yield delay(2000);
      yield put(push(links.hotels));
    }
    yield put(setLoading(false));
  } catch (e) {
    console.warn(e);
  }
}
