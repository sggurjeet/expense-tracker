import { ADD_TRANSACTION, DEL_TRANSACTION } from "./type";

//Action for adding a transaction
export const addTransaction = (transaction) => {
  return {
    type: ADD_TRANSACTION,
    payload: transaction,
  };
};
export const delTransaction = (transactionId) => {
  return {
    type: DEL_TRANSACTION,
    payload: transactionId,
  };
};
