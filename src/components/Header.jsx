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
      }}
    >
      <h5>Total Items: {list.length}</h5>
      <button
        style={{
          margin: '10px',
        }}
        onClick={handleClearList}
      >
        Clear List
      </button>
    </div>
  );
}
