import { useDispatch } from 'react-redux';
import s from './TodoList.module.css';
import { editTodo, deleteTodo, toggleTodo } from '../../redux/operations';

const Item = ({ completed, todo, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() =>
          dispatch(toggleTodo({ id, todo, completed: !completed }))
        }
      />
      <p>{todo}</p>

      {/* <button onClick={() => dispatch(editTodo({ id, todo: 'Заміняю на цей текст' }))}>
        Edit
      </button> */}
      <button
        onClick={
          () =>
            dispatch(
              editTodo({ id, todo: prompt('Введіть нове значення: ') ?? todo })
            ) // якщо нічого не ввели, то todo (щоб не впала сторінка при null)
        }
      >
        Edit
      </button>

      {/* замінили removeTodo на  deleteTodo*/}
      <button onClick={() => dispatch(deleteTodo(id))}>Delete</button>
    </li>
  );
};
export default Item;
