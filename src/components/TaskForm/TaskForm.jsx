import { Button } from '../Button/Button';
import css from './TaskForm.module.css';
import { useDispatch } from 'react-redux'; // 1. Імпортуємо хук
import { addTask } from '../../redux/actions'; // 2. Імпортуємо фабрику екшену

export const TaskForm = () => {
  const dispatch = useDispatch(); // 3. Отримуємо посилання на функцію відправки екшенів

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;

    // 4. Викликаємо фабрику екшену та передаємо дані для payload
    // 5. Відправляємо результат – екшен створення завдання
    dispatch(
      addTask({
        id: crypto.randomUUID(), // вбудований у браузер метод crypto.randomUUID.
        completed: false,
        text: form.elements.text.value,
      })
    );

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
