import { SAVE_SIGLAS } from '../actions/index';

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
  default:
    return state;
  }
}
