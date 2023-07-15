import { delay, put } from 'redux-saga/effects';
import { push } from 'redux-first-history';
import { links } from '../../../../config/routers';

export function* callGetHotelsWorker(action) {
  try {
    console.log(action.payload);
    yield delay(3000);
    yield put(push(links.hotels));
  } catch (e) {
    console.warn(e);
  }
}
