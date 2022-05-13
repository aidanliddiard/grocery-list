import React from 'react';
import { useList } from '../context/ListProvider';

export default function Header() {
  const { list, handleClearList } = useList();

  return (
    <div>
      <h5>Total Items: {list.length}</h5>
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
}
