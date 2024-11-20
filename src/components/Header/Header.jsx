import { useContext } from 'react';
import s from './Header.module.css';
import { authContext } from '../../context/AuthProvider';
import { useToogle } from '../../hooks/useToggle';
import Modal from '../Modal/Modal';

const Header = () => {
  // 2. модальне вікно з власного хука
  const { isOpen, openModal, closeModal } = useToogle();

  const { username, logout } = useContext(authContext);
  return (
    <div>
      <header className={s.header}>
        <h3>Hooks</h3>
        <p>Welcome {username}</p>
        <button onClick={logout}>Logout</button>

        <button onClick={openModal}>Open Modal</button>
        {isOpen && (
          <Modal onClose={closeModal} style={{ color: 'black' }}>
            🥳 Lorem, is ...
          </Modal>
        )}
      </header>
    </div>
  );
};

export default Header;
