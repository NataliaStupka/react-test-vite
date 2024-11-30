import { createSlice } from '@reduxjs/toolkit';
//import { decrement } from './counter/action';

//початковий стан(дані)
const initialState = {
  counter: 100,
  step: 1,
};

//обов'язково name, initialState, reducers,
const slice = createSlice({
  name: 'counter',
  initialState,

  // reducers - це функції які впливають на initialState
  reducers: {
    // increment: (state, action) => {
    //   return {
    //     ...state,
    //     counter: state.counter + state.step,
    //   };
    // },
    //===перепишемо використовуючи imer
    increment: (state, action) => {
      state.counter += state.step;
    },

    decrement: (state, action) => {
      state.counter -= state.step;
    },

    reset: (state, action) => {
      return initialState;
    },

    changeStep: (state, action) => {
      state.step = action.payload;
    },
  },
});

//щоб працювати з reducers
export const counterReducer = slice.reducer;

//викликаємо функцію increment, decrement
export const { increment, decrement, reset, changeStep } = slice.actions; //actions - це всі ключі які ми додали в reducers
