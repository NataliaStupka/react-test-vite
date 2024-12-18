import s from "./Header.module.css";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operation";

// стилізація активного лінка
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  return (
    <>
      <header className={s.header}>
        <h3>Redux Toolkit</h3>

        {isLoggedIn && <div>{user.email}</div>}

        {/* переходи */}
        <ul className={s.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tasks" className={buildLinkClass}>
            Tasks
          </NavLink>

          {/* якщо user не зареєстрований - Увійти */}
          {!isLoggedIn && (
            <>
              <NavLink to="/login" className={buildLinkClass}>
                Login
              </NavLink>
              <NavLink to="/register" className={buildLinkClass}>
                Register
              </NavLink>
            </>
          )}

          {/* якщо user зареєстрований - кнопка Вийти */}
          {isLoggedIn && (
            <button onClick={() => dispatch(logout())}>Logout</button>
          )}
        </ul>
      </header>
    </>
  );
};

export default Header;
