import { v4 as uuidv4 } from 'uuid';

//ADD_EXPENSE
export const addExpense = ({
  amount = 0,
  note = '',
  description = '',
  createdAt = 0
} = {}) => {
  return {
    type: 'ADD_EXPENSE',
    expense: {
      id: uuidv4(),
      amount,
      note,
      description,
      createdAt
    }
  };
};
//EDIT_EXPENSE
export const editExpense = (id, updates) => {
  console.log(id,updates," edit action")
  return {
    type: 'EDIT_EXPENSE',
    id,
    updates
  };
};

//REMOVE_EXPENSE
export const removeExpense = ( id ) => {
  return {
    type: 'REMOVE_EXPENSE',
    id
  };
};
