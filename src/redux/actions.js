import { ADD_TRANSACTION } from "./type";

//Action for adding a transaction
export const addTransaction = (data) => {
  return {
    type: ADD_TRANSACTION,
    payload: data,
  };
};
