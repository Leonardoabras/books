import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
  error: string | null;
  isLoading: boolean;
};

const initialState: InitialStateData = {
  bookData: [],
  error: null,
  isLoading: false
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    getBook: state => {
      return { ...state, isLoading: true };
    },
    getBookSuccess: (state, action: PayloadAction<{ bookData: BookData[] }>) => {
      return { ...state, bookData: action.payload.bookData, isLoading: false };
    },
    getError: (state, action: PayloadAction<{ error: string }>) => {
      return { ...state, error: action.payload.error, isLoading: false };
    }
  }
});

const { actions, reducer } = bookSlice;
export const { getBook, getBookSuccess, getError } = actions;

export default reducer;
