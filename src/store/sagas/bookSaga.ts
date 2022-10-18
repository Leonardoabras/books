import { all, call, takeLatest, put } from 'redux-saga/effects';

import { AxiosResponse } from 'axios';
import { BookData, BookDetail } from '@/store/slices/bookSlice';

import { PayloadAction } from '@reduxjs/toolkit';

import api from '@/services/api';
import {
  getBook,
  getBookSuccess,
  getDetailBook,
  getBookDetailSuccess,
  getError
} from '@/store/slices/bookSlice';

function* getBookData() {
  try {
    const response: AxiosResponse<{ data: BookData[] }> = yield call(api.get, `/books?page=2`);
    yield put(getBookSuccess({ bookData: response.data.data }));
    //console.log(response.data);
  } catch (error) {
    yield put(getError({ error: error?.response?.data?.errors?.message }));
    console.log(error?.response?.data?.errors?.message);
  }
}

function* getBookDetail(action: PayloadAction<{ id: string }>) {
  try {
    const response: AxiosResponse<BookDetail> = yield call(api.get, `/books/${action.payload.id}`);
    yield put(getBookDetailSuccess({ bookDetailData: response.data }));
    console.log(response.data);
  } catch (error) {
    yield put(getError({ error: error?.response?.data?.errors?.message }));
    console.log(error?.response?.data?.errors?.message);
  }
}

export default function* watcher() {
  yield all([takeLatest(getBook, getBookData), takeLatest(getDetailBook, getBookDetail)]);
}
