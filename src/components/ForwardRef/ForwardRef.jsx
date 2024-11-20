import { useRef } from 'react';
import CustomInput from './CustomInput';

const ForwardRef = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div
      style={{
        border: '2px solid black',
        padding: '10px',
        backgroundColor: 'lightGrey',
      }}
    >
      <h2>forwardRef:</h2>
      <CustomInput
        ref={inputRef}
        placeholder="Натисніть на кнопку для фокусу"
      />
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default ForwardRef;
