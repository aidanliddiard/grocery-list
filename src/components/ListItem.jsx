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
          type="text"
          value={change}
          onChange={(e) => setChange(e.target.value)}
        />
        <button onClick={handleSave}>Save changes</button>
      </>
    );
  } else {
    content = (
      <>
        <p>{listItem.item}</p>
        <button onClick={() => setEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={listItem.done}
        onChange={(e) => {
          handleEdit({ ...listItem, done: e.target.checked });
        }}
      />
      {content}
      <button onClick={() => handleDelete(listItem.id)}>Delete</button>
    </>
  );
}
