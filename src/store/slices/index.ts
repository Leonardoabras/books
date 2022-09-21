import { combineReducers } from '@reduxjs/toolkit';

import user from '@/store/slices/userSlice';

const globalReducer = { user };

const rootReducer = combineReducers(globalReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
