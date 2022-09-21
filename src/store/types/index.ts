import store from '@/store';

export type ReduxStore = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
