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
export const ListContext = createContext();

export const ListProvider = ({ children }) => {
  const [list, dispatch] = useReducer(listReducer, initialList);

  const handleAddItem = (text) => {
    dispatch({ type: 'ADD_ITEM', payload: { text } });
  };

  const handleDeleteItem = (id) => {
    dispatch({ type: 'DELETE_ITEM', payload: { id } });
  };

  const handleEditItem = (item) => {
    dispatch({ type: 'EDIT_ITEM', payload: { item } });
  };

  return (
    <ListContext.Provider
      value={{ list, handleAddItem, handleDeleteItem, handleEditItem }}
    >
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  const context = useContext(ListContext);

  if (context === undefined)
    throw new Error('useList must be called from within a ListProvider');

  return context;
};
