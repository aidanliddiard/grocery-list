import { createContext, useContext, useEffect, useReducer } from 'react';

const initialList = [
  { id: Date.now(), item: 'Bring reusable bags', done: false },
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
    case 'EDIT_ITEM':
      return state.map((item) => {
        if (item.id === action.payload.editedItem.id) {
          return {
            ...item,
            done: action.payload.editedItem.done,
            item: action.payload.editedItem.item,
          };
        }
        return item;
      });
    case 'CLEAR_LIST':
      return (state = []);
    case 'LOCAL_STORAGE':
      return action.payload.localStorageList.map((item) => ({
        id: item.id,
        item: item.item,
        done: item.done,
      }));
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

  const handleEditItem = (editedItem) => {
    dispatch({ type: 'EDIT_ITEM', payload: { editedItem } });
  };

  const handleClearList = () => {
    dispatch({ type: 'CLEAR_LIST' });
  };

  useEffect(() => {
    if (list != initialList) {
      localStorage.setItem('item', JSON.stringify(list));
    }
  }, [list]);

  useEffect(() => {
    const localStorageList = JSON.parse(localStorage.getItem('item'));
    dispatch({ type: 'LOCAL_STORAGE', payload: { localStorageList } });
  }, []);

  return (
    <ListContext.Provider
      value={{
        list,
        handleAddItem,
        handleDeleteItem,
        handleEditItem,
        handleClearList,
      }}
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
