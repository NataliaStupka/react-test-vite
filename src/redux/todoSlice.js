import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import {
  addTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
  fetchTodos,
} from "./operations"; //запит

import { logout } from "./auth/operation";

const initialState = {
  //items: [{ id: 123, todo: "Learn React.", completed: true }],
  items: [],
  filter: "", //те що шукаємо (фільтруємо по цьому значенню)
  //
  visibilityFilter: "all", //кнопкі фільтру: all, complited, active
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: "todos",
  initialState,

  //те що локально змінює
  reducers: {
    //--пошук
    //фраза по якій будемо шукати (SearchBar)
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },

    changeVisibilityFilter: (state, action) => {
      state.visibilityFilter = action.payload;
    },

    //--перемикач
    toggleTodo: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item !== -1) {
        item.completed = !item.completed;
      }
    },
  },

  //те що змінює на сервері
  //запит
  //builder (як switch)- функція яка має свої методи
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        //state.isLoading = false;
      })
      // очищаємо сторінку при виході з акаунту
      .addCase(logout.fulfilled, () => {
        return initialState;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        ); //локально видаляємо на стороні клієнта
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const item = state.items.find((item) => item.id === action.payload.id);
        item.todo = action.payload.todo;
      })
      .addCase(toggleTodo.fulfilled, (state, { payload }) => {
        const item = state.items.find((item) => item.id === payload.id);
        item.completed = !item.completed;
      })

      //якщо спрацьовує одна із
      .addMatcher(
        isAnyOf(
          addTodo.pending,
          editTodo.pending,
          deleteTodo.pending,
          fetchTodos.pending
        ),
        (state, action) => {
          state.isError = false;
          state.isLoading = true;
        }
      )

      .addMatcher(
        isAnyOf(
          addTodo.rejected,
          editTodo.rejected,
          deleteTodo.rejected,
          fetchTodos.rejected
        ),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      )

      .addMatcher(
        isAnyOf(
          addTodo.fulfilled,
          editTodo.fulfilled,
          deleteTodo.fulfilled,
          fetchTodos.fulfilled
        ),
        (state) => {
          state.isLoading = false;
        }
      );
  },
});

//selector перенесено в папку selector

//------
//використати actions
export const { removeTodo, changeFilter, changeVisibilityFilter } =
  slice.actions;

//експортуємо slice
export const todoReducer = slice.reducer;
