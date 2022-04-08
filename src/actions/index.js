import api from '../services/api';

export const SAVE_USER = 'SAVE_USER';
export const SAVE_SIGLAS = 'SAVE_SIGLAS';
export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export function saveUser(payload) {
  return {
    type: SAVE_USER,
    payload,
  };
}

export function saveSiglas(payload) {
  return {
    type: SAVE_SIGLAS,
    payload,
  };
}

export function saveExpenses(payload) {
  return {
    type: SAVE_EXPENSES,
    payload,
  };
}

export function getCoinAPI() {
  return async (dispatch) => {
    try {
      const sigla = await api();
      const siglaArray = Object.keys(sigla).map((element) => element);
      dispatch(saveSiglas(siglaArray));
    } catch (error) {
      return error;
    }
  };
}
