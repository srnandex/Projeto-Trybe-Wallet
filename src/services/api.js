async function api() {
  const END_POINT = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(END_POINT);
  const sigla = await response.json();
  delete sigla.USDT;
  return sigla;
}

export default api;
