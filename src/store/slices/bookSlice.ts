import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type BookDetail = BookData & {
  language: string;
  isbn10: string;
  isbn13: string;
  category: string;
  description: string;
};

export type BookData = {
  id: string;
  imageUrl: string;
  title: string;
  authors: string[];
  pageCount: number;
  publisher: string;
  published: number;
};

type InitialStateData = {
  bookData: BookData[];
  bookDetailData: BookDetail | null;
  error: string | null;
  isLoading: boolean;
  bookCategory?: string[];
};

const initialState: InitialStateData = {
  bookData: [],
  bookDetailData: null,
  error: null,
  isLoading: false,
  bookCategory: []
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getBook: (state, action: PayloadAction<{ bookCategory?: string[] }>) => {
      return { ...state, bookCategory: action?.payload?.bookCategory, isLoading: true };
    },
    getBookSuccess: (state, action: PayloadAction<{ bookData: BookData[] }>) => {
      return { ...state, bookData: action.payload.bookData, isLoading: false };
    },
    getDetailBook: (state, _: PayloadAction<{ id: string }>) => {
      return { ...state, isLoading: true };
    },
    getBookDetailSuccess: (state, action: PayloadAction<{ bookDetailData: BookDetail }>) => {
      return { ...state, bookDetailData: action.payload.bookDetailData, isLoading: false };
    },
    getError: (state, action: PayloadAction<{ error: string }>) => {
      return { ...state, error: action.payload.error, isLoading: false };
    }
  }
});

const { actions, reducer } = bookSlice;
export const { getBook, getBookSuccess, getDetailBook, getBookDetailSuccess, getError } = actions;

export default reducer;
