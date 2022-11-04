import { all, call, takeLatest, put } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';

import api from '@/services/api';

import {
  getBook,
  getBookSuccess,
  getDetailBook,
  getBookDetailSuccess,
  getError
} from '@/store/slices/bookSlice';
import { BookData, BookDetail } from '@/store/slices/bookSlice';

function bookFilterFormat({ value, prefix }: { value?: string; prefix?: string }) {
  return value ? `&${prefix}=${value}` : '';
}

function* getBookData({
  payload
}: PayloadAction<{ bookCategory: string[]; searchBook: string } | undefined>) {
  try {
    const categoriesFilter = bookFilterFormat({
      value: payload?.bookCategory?.join('&category='),
      prefix: 'category'
    });
    const searchFilter = bookFilterFormat({
      value: payload?.searchBook,
      prefix: 'title'
    });

    const response: AxiosResponse<{ data: BookData[] }> = yield call(
      api.get,
      `/books?page=1${categoriesFilter}${searchFilter}`
    );

    yield put(getBookSuccess({ bookData: response.data.data }));
  } catch (error) {
    yield put(getError({ error: response?.data?.errors?.message }));
  }
}

function* getBookDetail(action: PayloadAction<{ id: string }>) {
  try {
    const response: AxiosResponse<BookDetail> = yield call(api.get, `/books/${action.payload.id}`);
    yield put(getBookDetailSuccess({ bookDetailData: response.data }));
  } catch (error) {
    yield put(getError({ error: response?.data?.errors?.message }));
  }
}

export default function* watcher() {
  yield all([takeLatest(getBook, getBookData), takeLatest(getDetailBook, getBookDetail)]);
}
