//components

// import { Counter } from './Counter/Counter';
//import { TodoList } from './TodoList/TodoList';
import { Routes, Route } from "react-router-dom";

import Layout from "./Layout"; //обгортка
//pages
import Home from "../pages/Home/Home";
import Tasks from "../pages/Tasks/Tasks";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../redux/auth/operation";
import { selectIsRefreshing } from "../redux/auth/selectors";

//приватний маршрут, Restricted маршрут
import PrivateRoute from "./PrivateRoute";
import RestrictedRoute from "./RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  //перевіряємо чи є такий користувач чи ні
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // isRefreshing -  щоб інтерфейс 'не блимав' (якщо true - нічого не покаже)
  // замість null можна поставити loader, зображення, білий екран
  return isRefreshing ? null : (
    <Routes>
      {/* Layout, все що вньому буде мати header */}
      <Route path="/" element={<Layout />}>
        {/* index - якщо path дублюється */}
        <Route index element={<Home />} />
        <Route
          path="tasks"
          element={
            <PrivateRoute>
              <Tasks />
            </PrivateRoute>
          }
        />
      </Route>

      <Route
        path="register"
        element={
          <RestrictedRoute component={<Register />} redirectTo="/tasks" />
        }
      />
      <Route
        path="login"
        element={<RestrictedRoute component={<Login />} redirectTo="/tasks" />}
      />
    </Routes>
  );
};

export default App;
