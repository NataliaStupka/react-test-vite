//components

// import { Counter } from './Counter/Counter';
//import { TodoList } from './TodoList/TodoList';
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
//pages
import Home from "../pages/Home/Home";
import Tasks from "../pages/Tasks/Tasks";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const App = () => {
  return (
    <Routes>
      {/* Layout, все що вньому буде мати header */}
      <Route path="/" element={<Layout />}>
        {/* index - якщо path дублюється */}
        <Route index element={<Home />} />
        <Route path="tasks" element={<Tasks />} />
      </Route>

      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default App;
