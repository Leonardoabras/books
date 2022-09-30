import { all, call, takeLatest, put } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';

import api from '@/services/api';
import { getToken, getTokenSuccess, getLoginError } from '@/store/slices/userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* login(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const response: AxiosResponse = yield call(api.post, '/auth/sign-in', {
      email: action.payload.email,
      password: action.payload.password
    });
    yield put(getTokenSuccess({ token: response.headers.authorization }));
    console.log(response.headers.authorization);
  } catch (error) {
    yield put(getLoginError({ loginError: error?.response?.data?.errors?.message }));
    console.log(error?.response?.data?.errors?.message);
  }
}

export default function* watcher() {
  yield all([takeLatest(getToken, login)]);
}
