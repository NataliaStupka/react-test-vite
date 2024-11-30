import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';

// *** 1. ↓ копіюємо з з докум.Redux-Persist (для redux-persist)
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
//
import { todoReducer } from './todoSlice';

const persistConfig = {
  key: 'counterPersistor', // як буде записано в LocalStorage
  version: 1,
  storage,
};
const persistConfigTodos = {
  key: 'todos', // як буде записано в LocalStorage
  version: 1,
  storage,
  whitelist: ['items'], //вказую, що зберігаю (тільки items, а filter ні)
  //blacklist: ['filter'], //вказую, що не зберігаю
};

//обгортка
const persistedReducer = persistReducer(persistConfig, counterReducer); //
const persistedReducerTodos = persistReducer(persistConfigTodos, todoReducer);
//--- ↑ докум.Redux-Persist------

//підключаємо counterReducer
//configureStore - каже з яких частин складається 'склад'
export const store = configureStore({
  reducer: {
    counter: persistedReducer, //збережений в LocalStorage counterReducer
    todos: persistedReducerTodos, //підключили todoReducer з todoSlice
  },

  // *** 2.  ↓ копіюємо з з докум.Redux-Persist (для redux-persist)
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //--- ↑ докум.Redux-Persist------
});

// *** 3.  ↓ копіюємо з з докум.Redux-Persist (для redux-persist)
export let persistor = persistStore(store);
