import clsx from 'clsx'; //лдя додавання декількох класів на елемент
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>Logo</div>

      <div className={s.text}>
        <p className={s.title}>Hello</p>
        {/* <p className={`${s.title} ${s.second_class}`}>World</p> */}
        <p
          className={clsx(s.title, s.second_class, 'active', 'hello', 'world')}
        >
          World
        </p>
      </div>

      <nav className={s.wrapper}>
        <ul className={s.nav}>
          <li className={s.nav_item}>Home</li>
          <li className={s.nav_item}>About</li>
          <li className={s.nav_item}>Profile</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
