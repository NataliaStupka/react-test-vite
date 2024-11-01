import s from './Modal.module.css';
import { useEffect } from 'react';

const Modal = ({ children, title = 'Default modal', onClose }) => {
  //==закриває модалку кліком по бекдропу
  const handleBackdropClick = e => {
    // console.log('Target:', e.target); //де клікнули
    // console.log('CurrentTarget:', e.tcurrentTarget); //де слухач
    if (e.target === e.currentTarget) {
      //==якщо клікнули по бекдропу - закривваємо модалку
      onClose();
    }
  };

  useEffect(() => {
    //закриває модалку по Esc
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown); //повісили слухача на весь документ

    //приклади "витіку пам'яті"
    const intervalId = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    const timeoutId = setTimeout(() => {
      console.log('Hello setTimeout! 🔥');
    }, 3000);

    //cleanUp: знімаємо всі слухачі, setInterval, setTimeout
    return () => {
      console.log('Модалку закрили!');
      clearInterval(intervalId); //зняли setInterval
      clearTimeout(timeoutId); //зняли setTimeout
      document.removeEventListener('keydown', handleKeyDown); //зняли слухача
    };
  }, [onClose]); //спрацьовує на onClose (setIsOpen(false))

  return (
    //--бекдроп
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
