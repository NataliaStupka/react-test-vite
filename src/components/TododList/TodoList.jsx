//useEffect(() => {що робимо, при змінні того за чим слідкуємо}, [за чим слідкуємо])
import { useState, useEffect } from 'react';
import s from './Todo.module.css';
import { nanoid } from 'nanoid'; //генерування id
import TodoItem from './TodoItem'; //компоненнт
import todosData from '../../assets/todosData.json'; //масив об'єктів справ

const TodoList = () => {
  const [todos, setTodos] = useState(
    // (*2)якщо в localStorage є 'todos' рендеремо його, як ні то todosData
    () => JSON.parse(localStorage.getItem('todos')) ?? todosData
  );
  const [newValue, setNewValue] = useState('');

  //console.log('todos', todos);

  //вилалити =======
  const handleDeleteTodo = id => {
    console.log('Видаляємо замітку');
    //поверне тільки ті, що не = вибраному id
    setTodos(prev => prev.filter(item => item.id !== id));
  };
  //(*1) зберігаємо в localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  //додати ========
  const handleAddTodo = () => {
    console.log('Додаємо замітку');
    //створюємо нову замітку(об'єкт)
    const newTodo = {
      id: nanoid(4), //згенерували (npm i nanoid)
      todo: newValue, //те що ввели в input
      completed: false,
    };
    //вставляємо нову замітку в розмітку
    setTodos(prev => [...prev, newTodo]); //в масив розпиляємо те що було і додаємо нову замітку
    setNewValue(''); //очистили input
  };

  return (
    <>
      {/* Додаємо замітку */}
      <div className={s.flex}>
        <input
          value={newValue}
          //записали нову замітку input=====
          onChange={e => setNewValue(e.target.value)}
          className={s.input}
        />
        <button onClick={handleAddTodo} className="btn border">
          Add
        </button>
      </div>
      {/* -------------------------------------- */}
      {/* Замітки, що є, прийшли з todosData */}
      <ul className={s.list}>
        {todos.map(item => (
          <TodoItem
            key={item.id}
            {...item}
            handleDeleteTodo={handleDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};

export default TodoList;