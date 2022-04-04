import { SAVE_USER } from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

export default function formLogin(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_USER:
    return {
      ...state, email: action.payload,
    };
  default:
    return state;
  }
}
