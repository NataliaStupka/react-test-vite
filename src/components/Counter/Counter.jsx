import { useState } from 'react';
import s from './Counter.module.css';

// RULES Xуки
// 1. Тільки в функціональному компоненті
// 2. Тільки в КОМПОНЕНТІ (З ВЕЛИКОЇ ЛІТЕРИ НАША ФУНКЦІЯ)
// 3. Без умов, без циклів, не в іншій функції
// 4. Xуки починаються з ключового слова 'use'

//prev - попереднє значення

const Counter = () => {
  const [counter, setCounter] = useState(0); //useState - початкове значення, передасть в counter
  const [step, setStep] = useState(5);

  const handleMinusClick = () => {
    setCounter(prev => prev - 1);
  };
  const handlePlusClick = () => {
    //setCounter(prev => prev + 1);
    setCounter(prev => prev + step); //додаємо, що введено в input
  };
  const handleReset = () => {
    setCounter(0); //обнуляє лічильник
    setStep(0); //обнуляє input
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input
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
          <button className="btn" onClick={handlePlusClick}>
            plus {step}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;

// //--=-=-=-=-- ЧЕРЕЗ Class --=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--
// import { Component } from 'react';

// class Counter extends Component {
//   state = {
//     value: 0,
//   };

//   handlePlusClick = () =>
//     this.setState(prevState => ({ value: prevState.value + 1 }));
//   handleMinusClick = () =>
//     this.setState(prevState => ({ value: prevState.value - 1 }));
//   handleReset = () => this.setState({ value: 0 });

//   render() {
//     const { value } = this.state; //деструктуризація

//     return (
//       <div className={s.flexContainer}>
//         <div className={s.wrapper}>
//           <h1>{value}</h1>

//           <div className={s.flex}>
//             <button className="btn" onClick={this.handleMinusClick}>
//               minus 1
//             </button>
//             <button className="btn" onClick={this.handleReset}>
//               reset
//             </button>
//             <button className="btn" onClick={this.handlePlusClick}>
//               plus 1
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Counter;
