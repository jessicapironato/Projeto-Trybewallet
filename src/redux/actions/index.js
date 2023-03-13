export const EMAIL_ACTION = 'EMAIL_ACTION';
export const CURRENCY_ACTION = 'CURRENCY_ACTION';
export const REQUEST_API = 'REQUEST_API';
export const EXPENSE_ACTION = 'EXPENSE_ACTION';

export const emailAction = (payload) => ({
  type: EMAIL_ACTION,
  payload,

});

// Requisito 3 Fiz o fetchAPi neste arquivo porque não sabia como fazer direto na função fetchApiCurrencies

export const currencyAction = (currencies) => ({
  type: CURRENCY_ACTION,
  payload: currencies,
});

export const requestAPI = () => ({ type: REQUEST_API });
const API_URL = ('https://economia.awesomeapi.com.br/json/all');

const fetchAPI = async () => {
  const reponse = await fetch(API_URL);
  const json = await reponse.json();
  return json;
};

export function fetchApiCurrencies() {
  return async (dispatch) => {
    dispatch(requestAPI());

    const location = await fetchAPI();
    const currencies = Object.keys(location).filter((currency) => currency !== 'USDT');
    dispatch(currencyAction(currencies));
  };
}

// requisito 4 - construída com auxílio de colegas Aline e Raphael (explicaram a lógica)

export const expensesAction = (expense) => ({

  type: EXPENSE_ACTION,
  payload: expense,

});

export function exchangeCatch(expense) {
  return async (dispatch) => {
    dispatch(requestAPI());

    const location = await fetchAPI();
    const objectExchange = {
      ...expense,
      exchangeRates: location,
    };
    dispatch(expensesAction(objectExchange));
  };
}
