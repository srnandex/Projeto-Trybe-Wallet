export const SAVE_USER = 'SAVE_USER';
export const SAVE_SIGLAS = 'SAVE_SIGLAS';

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

export function getCoinAPI() {
  return async (dispatch) => {
    try {
      const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
      const response = await fetch(END_POINT);
      const sigla = await response.json();
      delete sigla.USDT;
      const siglaArray = Object.keys(sigla).map((element) => element);
      dispatch(saveSiglas(siglaArray));
    } catch (error) {
      return error;
    }
  };
}
