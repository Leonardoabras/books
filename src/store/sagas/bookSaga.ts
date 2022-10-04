import { all, call, takeLatest, put } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import { BookData } from '@/store/slices/bookSlice';

import api from '@/services/api';
import { getBook, getBookSuccess, getError } from '@/store/slices/bookSlice';

function* getBookData() {
  try {
    const response: AxiosResponse<{ data: BookData[] }> = yield call(api.get, `/books?page=2`);
    yield put(getBookSuccess({ bookData: response.data.data }));
    console.log(response.data);
  } catch (error) {
    yield put(getError({ error: error?.response?.data?.errors?.message }));
    console.log(error?.response?.data?.errors?.message);
  }
}

export default function* watcher() {
  yield all([takeLatest(getBook, getBookData)]);
}
