import { useEffect } from 'react';
import s from './Modal.module.css';

const Modal = ({ children, title = 'Default modal', onClose }) => {
  const handleBackdropClick = e => {
    // console.log('TARGET: ', e.target);
    // console.log('Current TARGET: ', e.currentTarget);
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    // cleanUp

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);
  return (
    <div onClick={handleBackdropClick} className={s.wrapper}>
      <div className={s.content}>
        <>
          <h1 style={{ fontSize: '50px' }}>{title}</h1>
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
