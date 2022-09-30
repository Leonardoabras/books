import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserData = {
  email: string;
  name: string;
};

type InitialStateData = {
  token: string | null;
  userData: UserData | null;
  isLoading: boolean;
  loginError: string | null;
};

const initialState: InitialStateData = {
  token: null,
  userData: null,
  isLoading: false,
  loginError: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getToken: (state, _: PayloadAction<{ email: string; password: string }>) => {
      return { ...state, isLoading: true, loginError: null };
    },
    getUser: (state, action: PayloadAction<{ userData: UserData }>) => {
      state.userData = action.payload.userData;
    },
    getTokenSuccess: (state, action: PayloadAction<{ token: string }>) => {
      return { ...state, isLoading: false, token: action.payload.token };
    },
    getLoginError: (state, action: PayloadAction<{ loginError: string }>) => {
      return { ...state, isLoading: false, loginError: action.payload.loginError };
    }
  }
});

const { actions, reducer } = userSlice;

export const { getToken, getUser, getTokenSuccess, getLoginError } = actions;

export default reducer;
