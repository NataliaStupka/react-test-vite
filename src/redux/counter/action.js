// export const increment = () => {
//   return { type: 'INCREMENT' };
// };

// export const decrement = () => {
//   return { type: 'DECREMENT' };
// };

// export const reset = () => {
//   return { type: 'RESET' };
// };

// export const changeStep = step => {
//   return { type: 'CANGE_STEP', payload: step };
// };

import { createAction } from '@reduxjs/toolkit';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');
export const changeStep = createAction('changeStep');

console.log(increment());
console.log(changeStep('для пошуку'));
console.log(changeStep());
console.log(changeStep(5));
console.log(changeStep([1, 2, 3]));
