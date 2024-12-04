import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchTodos } from '../../redux/operations'; //запит

export const TodoList = () => {
  const dispatch = useDispatch();

  //асинхронний екшн
  //запит в момент рендеру на стадиї монтування
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
    </div>
  );
};
