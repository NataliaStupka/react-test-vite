import { useDispatch, useSelector } from 'react-redux';
import s from './Counter.module.css';

import {
  changeStep,
  decrement,
  increment,
  reset,
} from '../../redux/counter/action';

export const Counter = () => {
  //витягуєм counter через useSelector (в redux counter counter)
  const counter = useSelector(state => state.counter.counter); //приймає функцію в яку приходить стан і повертає ліше частину
  const step = useSelector(state => state.counter.step);

  //помічникб, керує процесами змін
  const dispatch = useDispatch();
  const handlePlusClick = () => {
    dispatch(increment());
  };
  const handleMinusClick = () => {
    dispatch(decrement());
  };
  const handleResetClick = () => {
    dispatch(reset());
  };
  const handleChangeStep = e => {
    dispatch(changeStep(+e.target.value));
    // dispatch(changeStep(Number(e.target.value)));
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button className="btn" onClick={handleMinusClick}>
            minus
          </button>
          <button className="btn" onClick={handleResetClick}>
            reset
          </button>
          <button className="btn" onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
