import React from 'react';

export default function ListItem({ listItem, handleDelete }) {
  return (
    <>
      <p>{listItem.item}</p>{' '}
      <button onClick={() => handleDelete(listItem.id)}>Delete</button>
    </>
  );
}
