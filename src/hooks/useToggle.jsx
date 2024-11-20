//ВЛАСНІ ХУКИ, всередині можна використовувати хуки реакта
//виглядає як звичайна функція

import { useState } from 'react';

export const useToogle = () => {
  //модальне вікно
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return { isOpen, openModal, closeModal };
};
