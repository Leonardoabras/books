import React, { useEffect } from 'react';
import { all, call, takeLatest, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AxiosResponse } from 'axios';

import api, { setTokenApi } from '@/services/api';
import {
  getToken,
  getTokenSuccess,
  getLoginError,
  requestLogout,
  logoutSuccess,
  logoutError
} from '@/store/slices/userSlice';
import { PayloadAction } from '@reduxjs/toolkit';

function* login(action: PayloadAction<{ email: string; password: string }>) {
  try {
    const response: AxiosResponse = yield call(api.post, '/auth/sign-in', {
      email: action.payload.email,
      password: action.payload.password
    });
    setTokenApi(response.headers.authorization);

    yield put(getTokenSuccess({ token: response.headers.authorization }));
    console.log(response.headers.authorization);

    yield AsyncStorage.setItem(
      '@Auth:user',
      JSON.stringify({ user: response.data, token: response.headers.authorization })
    );
  } catch (error) {
    yield put(getLoginError({ loginError: error?.response?.data?.errors?.message }));
    console.log(error?.response?.data?.errors?.message);
  }
}

function* logout() {
  try {
    yield call(AsyncStorage.removeItem, '@Auth:user');

    yield put(logoutSuccess());
  } catch (e) {
    yield put(logoutError());
  }
}

export default function* watcher() {
  yield all([takeLatest(getToken, login), takeLatest(requestLogout, logout)]);
}
