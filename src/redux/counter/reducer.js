import { increment, decrement, reset, changeStep } from './action';

//початковий стан(дані)
const initialState = {
  counter: 100,
  step: 1,
};

//функція, як міняється цей стан, повертає новий
//приймає старий state, повертає новий
//state - те з чым працює, action - те що приходить(те що відправляє dispatch)
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case increment.type: {
      return { ...state, counter: state.counter + state.step };
    }

    case decrement.type: {
      return { ...state, counter: state.counter - state.step };
    }

    case reset.type: {
      return initialState;
    }
    case changeStep.type: {
      return { ...state, step: action.payload };
    }

    default:
      return state;
  }
};
