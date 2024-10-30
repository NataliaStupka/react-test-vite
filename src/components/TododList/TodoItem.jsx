import s from './Todo.module.css';

const TodoItem = ({ id, completed, todo, handleDeleteTodo }) => {
  return (
    <li className={s.item} id={id}>
      <input type="checkbox" />
      <span>{todo}</span>
      <button onClick={() => handleDeleteTodo(id)} className="btn border">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
