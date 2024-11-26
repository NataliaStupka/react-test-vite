//components
import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { TaskForm } from './TaskForm/TaskForm';
import { TaskList } from './TaskList/TaskList';

export const App = () => {
  return (
    <Layout>
      {/* counter tasks(active/completed), fillter: all, active, completed  */}
      <AppBar />
      {/* form/input addTask */}
      <TaskForm />
      {/* checkbox + task */}
      <TaskList />
    </Layout>
  );
};
