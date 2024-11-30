import { selectFilter, selectTodos } from '../../redux/todoSlice';
import Item from './Item';
import s from './TodoList.module.css';

import { useSelector } from 'react-redux';

export const List = () => {
  //state - загальний(store), todos - назва слайсу, items - занчення в initialState
  // const todos = useSelector(state => state.todos.items);
  const todos = useSelector(selectTodos); //з todosSlice в якому selectTodos = state => state.todos.items;

  //для рендера не просто todos, а і відфільтрованого
  const filter = useSelector(selectFilter); //по чому фільтруємо (з todosSlice в якому selectFilter = state => state.todos.filter)
  const filterData = todos.filter(item =>
    item.todo.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filterData.map(item => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
