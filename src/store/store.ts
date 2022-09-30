import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducers from '@/store/slices';

import rootSaga from '@/store/sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), ...middleware]
});

sagaMiddleware.run(rootSaga);

export default store;
