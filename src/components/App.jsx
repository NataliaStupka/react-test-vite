//components
import Counter from './Counter/Counter';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TododList/TodoList';
import Modal from './Modal/Modal';
import Vote from './Vote/Vote';

import { useState } from 'react';

const App = () => {
  //для модалки----
  const [isOpen, setIsOpen] = useState(false); //на початку модалка схована
  const openModal = () => setIsOpen(true); //відкриває модалку
  const closeModal = () => setIsOpen(false); //закриває модалку
  //------
  return (
    <div>
      <Vote />

      <button
        onClick={openModal}
        style={{
          backgroundColor: 'pink ',
          borderRadius: '4px',
          border: '1px solid black',
        }}
      >
        Open Modal
      </button>

      {/* якщо isOpen=true, то відкривається модалка */}
      {isOpen && (
        <Modal onClose={closeModal}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          animi impedit dolorem libero corporis eaque. Commodi, soluta earum!
          Veritatis nemo molestias inventore recusandae, laboriosam unde.
          Reiciendis voluptatem dignissimos possimus delectus.
        </Modal>
      )}

      <Counter />
      <ColorPicker />
      <TodoList />
    </div>
  );
};

export default App;
