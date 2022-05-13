import React, { useState } from 'react';
import ListItem from '../components/ListItem';
import { useList } from '../context/ListProvider';

export default function Home() {
  const [newItem, setNewItem] = useState('');
  const { list, handleAddItem, handleDeleteItem, handleEditItem } = useList();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('click', newItem);
    handleAddItem(newItem);
    setNewItem('');
  };
  console.log('list', list);
  console.log('item', newItem);
  return (
    <>
      <h1>Grocery List</h1>
      <form>
        <input
          placeholder="Add item"
          type="text"
          name="newItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={handleSubmit}>Add to my list</button>
      </form>
      <ul>
        {list.map((listItem) => (
          <li key={listItem.id}>
            <ListItem
              listItem={listItem}
              handleDelete={handleDeleteItem}
              handleEdit={handleEditItem}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
