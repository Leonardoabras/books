import { all } from 'redux-saga/effects';

import userSaga from '@/store/sagas/userSaga';
import bookSaga from '@/store/sagas/bookSaga';

function* rootSaga() {
  yield all([userSaga(), bookSaga()]);
}

export default rootSaga;
