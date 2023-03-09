import { combineReducers } from 'redux';
// import user from './user';
// import wallet from './wallet';

const INITIAL_STATE = {};
const exemplo = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

const rootReducer = combineReducers({ exemplo });

export default rootReducer;
