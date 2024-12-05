import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { addTodo, editTodo, deleteTodo, fetchTodos } from './operations'; //запит

const initialState = {
  items: [{ id: 123, todo: 'Learn React.', completed: true }],
  filter: '', //те що шукаємо (фільтруємо по цьому значенню)
  //
  isLoading: false,
  isError: false,
};

const slice = createSlice({
  name: 'todos',
  initialState,

  //   //з нової версії додалась можливість додавати selectors 🥳
  //   //норм для звичайних селекторів
  //   selectors: {
  //       selectTodos: state => state.items,
  //       //та інші
  //   },

  reducers: {
    // // actions       (state - загальний(store))
    // removeTodo: (state, action) => {
    //   state.items = state.items.filter(item => item.id !== action.payload);
    // },

    // addTodo: (state, action) => {
    //   //пишемо за допомогою imer
    //   state.items.push(action.payload);
    // },

    //--пошук
    //фраза по якій будемо шукати (SearchBar)
    changeFilter: (state, action) => {
      state.filter = action.payload;
    },

    //--перемикач
    toggleTodo: (state, action) => {
      // state.items = state.items.map(item =>
      //                               //розсипаємо і міняємо його completed
      //   item.id === action.payload ? {...item, completed: !item.completed,} : item
      // );

      //або --
      //   const itemIndex = state.items.findIndex(
      //     item => item.id === action.payload
      //   );
      //   state.items[itemIndex].completed = !state.items[itemIndex].completed;

      //   або --
      const item = state.items.find(item => item.id === action.payload);
      if (item !== -1) {
        item.completed = !item.completed;
      }
    },

    // //--редагувати
    // editTodo: (state, action) => {
    //   const item = state.items.find(item => item.id === action.payload.id);
    //   item.todo = action.payload.todo;
    // },
  },

  //запит
  //builder (як switch)- функція яка має свої методи
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.items = action.payload;
        state.isLoading = false;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload.id); //локально видаляємо на стороні клієнта
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editTodo.fulfilled, (state, action) => {
        const item = state.items.find(item => item.id === action.payload.id);
        item.todo = action.payload.todo;
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
        state => {
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
        state => {
          state.isLoading = false;
        }
      );
  },
});

//useSelector в slice:
//state - загальний(store), todos - назва слайсу, items - занчення в initialState
export const selectTodos = state => state.todos.items;
//export const { selectTodos } = slice.selectors; // 🥳

export const selectFilter = state => state.todos.filter;

export const selectIsError = state => state.todosisError; //todoList
export const selectisLoading = state => state.todos.isLoading; //todoList
//------
//використати actions
export const { removeTodo, changeFilter, toggleTodo } = slice.actions;

//експортуємо slice
export const todoReducer = slice.reducer;
