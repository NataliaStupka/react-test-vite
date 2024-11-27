import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counter/reducer';

//підключаємо counterReducer
//configureStore - каже з яких частин складається 'склад'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
