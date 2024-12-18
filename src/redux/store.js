import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

//reducer
import { todoReducer } from "./todoSlice";
import { authReducer } from "./auth/slice";

//-- persist
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whiteList: ["token"], //зберігаємо тільки токен, для оновлення сторінки
};
const persistedReducer = persistReducer(persistConfig, authReducer);
//--

//підключаємо counterReducer
//configureStore - каже з яких частин складається 'склад'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer, //підключили todoReducer з todoSlice
    auth: persistedReducer,
  },
  //--persist
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  //--
});

//--persist
export const persistor = persistStore(store);
