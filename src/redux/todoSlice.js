import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [{ id: 123, todo: 'Learn React.', completed: true }],
  filter: '', //те що шукаємо (фільтруємо по цьому значенню)
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
    // actions       (state - загальний(store))
    removeTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },

    addTodo: (state, action) => {
      //пишемо за допомогою imer
      state.items.push(action.payload);
    },

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

    //--редагувати
    editTodo: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      item.todo = action.payload.todo;
    },
  },
});

//useSelector в slice:
//state - загальний(store), todos - назва слайсу, items - занчення в initialState
export const selectTodos = state => state.todos.items;
//export const { selectTodos } = slice.selectors; // 🥳

export const selectFilter = state => state.todos.filter;

//------
//використати actions
export const { removeTodo, addTodo, changeFilter, toggleTodo, editTodo } =
  slice.actions;

//експортуємо slice
export const todoReducer = slice.reducer;
