// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
// import { EMAIL_ACTION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  // case EMAIL_ACTION:
  //   return {
  //     ...state,
  //     ...action.payload,
  //   };
  default:
    return state;
  }
};

export default walletReducer;
