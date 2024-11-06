import initialTasks from '../../tasks.json';
import css from './App.module.css';
import { useState } from 'react';

import Form from '../Form/Form';
import Filter from '../Filter/Filter';
import TaskList from '../TaskList/TaskList';

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState('');

  const addTask = newTask => {
    setTasks(prevTasks => {
      return [...prevTasks, newTask];
    });
  };

  const deleteTask = taskId => {
    setTasks(prevTasks => {
      return prevTasks.filter(task => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter(task =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
