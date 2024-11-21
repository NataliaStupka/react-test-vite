import s from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className={s.header}>
        <h3>Routing</h3>
        <nav className={s.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
