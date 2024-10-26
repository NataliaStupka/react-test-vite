import s from './Modal.module.css';

const Modal = props => {
  return (
    <div className={s.container} style={{ border: '1px solid red' }}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Modal;
