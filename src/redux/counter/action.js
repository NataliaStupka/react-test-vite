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
