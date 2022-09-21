import { createSlice } from '@reduxjs/toolkit';

type InitialStateData = {
  token: string | null;
};

const initialState: InitialStateData = { token: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getToken: state => {
      state.token = 'Logado';
      console.log('BATATA');
    }
  }
});

const { actions, reducer } = userSlice;

export const { getToken } = actions;

export default reducer;
