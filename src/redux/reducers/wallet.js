// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { CURRENCY_ACTION, EXPENSE_ACTION, EXPENSE_REMOVE_ACTION } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,
};

const walletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case CURRENCY_ACTION:
    return {
      ...state,
      currencies: action.payload,
    };
  case EXPENSE_ACTION:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case EXPENSE_REMOVE_ACTION:
    return {
      ...state,
      expenses: state.expenses.filter((expense) => expense.id !== action.payload.id),
    };
  default:
    return state;
  }
};

export default walletReducer;
