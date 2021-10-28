import { ADD_TRANSACTION } from "./type";
import { combineReducers } from "redux";
const initialState = { transactions: [] };

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  reducer: reducer,
});

export default rootReducer;
