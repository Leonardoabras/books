import { all } from 'redux-saga/effects';

import userSaga from '@/store/sagas/userSaga';

function* rootSaga() {
  yield all([userSaga()]);
}

export default rootSaga;
