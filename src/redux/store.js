import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice";

//reducer
import { todoReducer } from "./todoSlice";
import { authReducer } from "./auth/slice";

//підключаємо counterReducer
//configureStore - каже з яких частин складається 'склад'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer, //підключили todoReducer з todoSlice
    auth: authReducer,
  },
});
