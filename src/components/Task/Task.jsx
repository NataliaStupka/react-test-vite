import { MdClose } from 'react-icons/md'; //іконка
import css from './Task.module.css';

//видалення завдання/Переключення статусу
import { useDispatch } from 'react-redux'; // 1. Імпортуємо хук
import { deleteTask, toggleCompleted } from '../../redux/actions'; // 2. Імпортуємо фабрику екшену

export const Task = ({ task }) => {
  // 3. Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  // 4. Викликаємо фабрику екшену та передаємо ідентифікатор завдання
  // 5. Відправляємо результат - екшен видалення/перемикання завдання
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
