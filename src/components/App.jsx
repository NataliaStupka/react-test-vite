//components
import Header from './Header/Header';
import Counter from './Counter/Counter';
import ForwardRef from './ForwardRef/ForwardRef';
import ContextExample from './ContextExample/ContextExample';
import { useContext } from 'react';
import { authContext } from '../context/AuthProvider';
import Form from './Form/Form';
import Modal from './Modal/Modal';
import { useToogle } from '../hooks/useToggle';

const App = () => {
  // 1. модальне вікно з власного хука
  const { isOpen, openModal, closeModal } = useToogle();

  // context
  const { username } = useContext(authContext);
  //якщо ім'я відсутнє, рендериться те що в if
  //якщо є, рендер Header Counter та інше
  if (!username) {
    return <Form />;
  }

  return (
    <div>
      <Header />

      <h2>useState, useMemo, useRef, useEffect: </h2>
      <Counter />
      <ForwardRef />
      <ContextExample auto="Audi" />

      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, alias
          soluta voluptatum facere eum repellat, repudiandae ea quisquam fuga
          repellendus quo minus cupiditate dignissimos eos quis deserunt debitis
          impedit consequatur.
        </Modal>
      )}
      <button onClick={openModal}>Open Modal</button>
    </div>
  );
};

export default App;
