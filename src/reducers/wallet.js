import { SAVE_SIGLAS, SAVE_EXPENSES } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

export default function siglasCoin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_SIGLAS:
    return {
      ...state, currencies: action.payload,
    };
  case SAVE_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, action.payload],
    };
  default:
    return state;
  }
}
