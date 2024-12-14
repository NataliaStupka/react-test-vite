import s from "./Header.module.css";
import clsx from "clsx";

import { NavLink } from "react-router-dom";

// стилізація активного лінка
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <>
      <header className={s.header}>
        <h3>Redux Toolkit</h3>

        {/* переходи */}
        <ul className={s.nav}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tasks" className={buildLinkClass}>
            Tasks
          </NavLink>

          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
        </ul>
      </header>
    </>
  );
};

export default Header;
