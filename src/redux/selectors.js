//useSelector в slice:

import { createSelector } from '@reduxjs/toolkit';

//state - загальний(store), todos - назва слайсу, items - занчення в initialState
export const selectTodos = state => state.todos.items; //повертає список задач

export const selectFilter = state => state.todos.filter;

export const selectIsError = state => state.todosisError; //todoList
export const selectisLoading = state => state.todos.isLoading; //todoList

export const selectVisibilityFilter = state => state.todos.visibilityFilter;

//мемоізація
export const selectFilteredTasksMemo = createSelector(
  [selectTodos, selectVisibilityFilter],
  (todos, visibilityFilter) => {
    console.log('1-Select Filtered Task');

    // const todos = selectTodos(state);
    // const visibilityFilter = selectVisibilityFilter(state);

    switch (visibilityFilter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);

      default:
        return todos;
    }
  }
);

//складений селектор
//рендерить обране: all, active, complited
export const selectFilteredTask = state => {
  console.log('1-Select Filtered Task');

  const todos = selectTodos(state);
  const visibilityFilter = selectVisibilityFilter(state);

  switch (visibilityFilter) {
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);

    default:
      return todos;
  }
};

//кількість не виконаних завдань
export const selectUncompletedTodos = state => {
  console.log('2-Uncompleted Login');

  const todos = selectTodos(state);
  return todos.reduce(
    (total, curr) => (!curr.completed ? total + 1 : total),
    0
  );
};

//мемоізація
export const selectUncompletedTodosMemo = createSelector(
  [selectTodos],
  todos => {
    console.log('2-Uncompleted Login');
    return todos.reduce(
      (total, curr) => (!curr.completed ? total + 1 : total),
      0
    );
  }
);
