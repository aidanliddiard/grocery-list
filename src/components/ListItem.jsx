import React, { useState } from 'react';

export default function ListItem({ listItem, handleDelete, handleEdit }) {
  const [editing, setEditing] = useState(false);
  const [change, setChange] = useState('');

  console.log(change);
  const handleSave = () => {
    handleEdit({ ...listItem, item: change });
    setEditing(false);
  };

  let content;

  if (editing === true) {
    content = (
      <>
        <input
          aria-label="editingField"
          type="text"
          value={change}
          onChange={(e) => setChange(e.target.value)}
        />
        <button
          style={{
            margin: '10px',
          }}
          onClick={handleSave}
        >
          Save changes
        </button>
      </>
    );
  } else {
    content = (
      <>
        <p style={{ textDecoration: listItem.done ? 'line-through' : null }}>
          {listItem.item}
        </p>
        <button
          style={{
            margin: '10px',
          }}
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <input
        type="checkbox"
        checked={listItem.done}
        onChange={(e) => {
          handleEdit({ ...listItem, done: e.target.checked });
        }}
      />
      {content}
      <button
        style={{
          margin: '10px',
        }}
        onClick={() => handleDelete(listItem.id)}
      >
        Delete
      </button>
    </div>
  );
}
