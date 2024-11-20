// !! коли міняється State то оновлюється компонент, коли Ref - оновлення компонента не іде

import { useState, useMemo, useRef, useEffect } from 'react';
import s from './Counter.module.css';

import { useToogle } from '../../hooks/useToggle';
import Modal from '../Modal/Modal';

const Counter = () => {
  const [counter, setCounter] = useState(0); //useState - початкове значення, передасть в counter
  const [step, setStep] = useState(5);
  const [testValue, setTestValue] = useState(1);
  const refBtn = useRef(); //імітація натискання кнопки
  const fileRef = useRef(); //обрати файл з диску

  //рахує кількість рендерів
  const renderCounter = useRef(0);
  useEffect(() => {
    console.log(renderCounter.current++);
  }); //прибираємо залежність

  const handleMinusClick = () => {
    setCounter(prev => prev - 1);
  };
  const handlePlusClick = () => {
    //setCounter(prev => prev + 1);
    setCounter(prev => prev + 1); //додаємо, що введено в input
  };
  const handleReset = () => {
    setCounter(0); //обнуляє лічильник
    setStep(0); //обнуляє input
  };

  //useEffect читається після монтажу
  useEffect(() => {
    console.log(refBtn); // подивитися все що доступно в refBtn

    // //імітуємо натискання плюса кожну секунду
    // setInterval(() => {
    //   refBtn.current.click();
    // }, 1000);
  }, []);

  //те, що буде в ==- useMemo -==, без зміни: виконається, запам'ятає і буде ввідавати без перерендеру наступні рази
  const result = useMemo(() => {
    console.log('Calck start');
    console.log('Calck End');
    return testValue * testValue;
  }, [testValue]); // змінює тільки тоді коли змінюється testValue

  // 3. модальне вікно з власного хука
  const { isOpen, openModal, closeModal } = useToogle();

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
          value={step}
          onChange={e => {
            //console.log('значення input:', Number(e.target.value));
            setStep(+e.target.value);
          }}
        />
        <div className={s.flex}>
          <button className="btn" onClick={handleMinusClick}>
            minus 1
          </button>
          <button className="btn" onClick={handleReset}>
            reset
          </button>
          <button ref={refBtn} className="btn" onClick={handlePlusClick}>
            plus 1
          </button>
        </div>
        <h3 style={{ color: 'white' }}>Result:{result}</h3>
        <button onClick={() => setTestValue(prev => prev + 1)}>Click</button>

        {/* Open Modal #3 */}
        {isOpen && <Modal onClose={closeModal}>🦊</Modal>}
        <button onClick={openModal}>Open Modal</button>

        {/* Обрати файл */}
        <input ref={fileRef} style={{ visibility: 'hidden' }} type="file" />
        <button onClick={() => fileRef.current.click()}>Обрати файл</button>

        <button
          onClick={() => {
            renderCounter.current++;
          }}
        >
          Render count: {renderCounter.current}
        </button>
      </div>
    </div>
  );
};

export default Counter;
