//rafce - розгоргути компонент
import { useState } from 'react';
import CustomInput from './CustomInput';

const UseIdExaple = () => {
  const [inputCount, setInputCount] = useState(1);
  const pageCount = 12; //Пагінація 12 сторінок

  return (
    <div style={{ border: '1px solid pink', paddingTop: '20px' }}>
      <h2>Exaple useId</h2>
      <button onClick={() => setInputCount(prev => prev + 1)}>ADD input</button>
      <button onClick={() => setInputCount(prev => prev - 1)}>
        REMOVE input
      </button>
      {/* робимо генератор інпутив, підійде для пагінації сторінок */}
      {Array(inputCount)
        .fill('')
        .map((_, idx) => (
          <CustomInput key={idx} />
        ))}

      {/* Пагінація сторінок */}
      {/* fill() -  заповнення*/}
      {Array(pageCount)
        .fill('')
        .map((_, idx) => (
          <button key={idx}>{idx + 1}</button>
        ))}
    </div>
  );
};

export default UseIdExaple;
