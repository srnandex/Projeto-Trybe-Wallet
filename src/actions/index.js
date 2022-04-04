export const SAVE_USER = 'SAVE_USER';
export const SAVE_WALLET = 'SAVE_WALLET';

export function saveUser(payload) {
  return {
    type: SAVE_USER,
    payload,
  };
}

export function saveWallet(payload) {
  return {
    type: SAVE_WALLET,
    payload,
  };
}
