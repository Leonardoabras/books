import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type DataBooks = {
  id: string | null;
  title: string | null;
  authors: string | null;
  pageCount: number | null;
  publisher: string | null;
  published: number | null;
  imageUrl: string | null;
};

const initialState: DataBooks = {
  id: null,
  title: null,
  authors: null,
  pageCount: null,
  publisher: null,
  published: null,
  imageUrl: null
};
const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {}
});
