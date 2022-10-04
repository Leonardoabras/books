import { combineReducers } from '@reduxjs/toolkit';

import user from '@/store/slices/userSlice';
import book from '@/store/slices/bookSlice';

const globalReducer = { user, book };

const rootReducer = combineReducers(globalReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
