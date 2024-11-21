import s from './Header.module.css';
import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

// стилізація активного лінка
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <h3>Routing</h3>
        <nav className={s.nav}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
          <NavLink className={buildLinkClass} to="/about">
            About
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;
