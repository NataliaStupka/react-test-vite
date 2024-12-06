import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../../redux/operations'; //запит
//import { selectisLoading } from '../../redux/todoSlice';
import {
  selectisLoading,
  selectUncompletedTodos,
  selectUncompletedTodosMemo,
} from '../../redux/selectors';
import Filter from './Filter';

export const TodoList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectisLoading);

  const uncompletedTodos = useSelector(selectUncompletedTodosMemo);

  //асинхронний екшн
  //запит в момент рендеру на стадиї монтування
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      <h3>Uncompleted Tasks: {uncompletedTodos}</h3>
      {isLoading && <h2>Loading...</h2>}
      <List />
    </div>
  );
};
