import { createContext, useContext, useReducer } from 'react';

const initialList = [
  { id: Data.now(), item: 'Bring reusable bags', done: false },
];

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        { id: Date.now(), item: action.payload.text, done: false },
        ...state,
      ];
    case 'DELETE_ITEM':
      return state.filter((item) => item.id != action.payload.id);
    // case 'EDIT_ITEM':
    //   return [];
    default:
      throw new Error(`Action type ${action.type} is not supported`);
  }
};
