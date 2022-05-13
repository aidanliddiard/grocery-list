import React from 'react';
import { useList } from '../context/ListProvider';

export default function Header() {
  const { list, handleClearList } = useList();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '30px',
      }}
    >
      <h1>Grocery List</h1>
      <div>
        <h5>Total Items: {list.length}</h5>
        <button
          style={{
            padding: '10px',
          }}
          onClick={handleClearList}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
