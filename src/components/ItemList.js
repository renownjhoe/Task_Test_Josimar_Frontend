// src/components/ItemList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, deleteItem } from '../features/itemSlice';
import { getItems, createItem, updateItem as updateItemApi, deleteItem as deleteItemApi } from '../services/itemService';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getItems();
      data.forEach((item) => dispatch(addItem(item)));
    };
    fetchItems();
  }, [dispatch]);

  const handleCreate = async () => {
    const newItem = { reserved_amount: 100, status: 'active' };
    const data = await createItem(newItem);
    dispatch(addItem(data));
  };

  const handleUpdate = async (id) => {
    const updatedItem = { reserved_amount: 200, status: 'inactive' };
    const data = await updateItemApi(id, updatedItem);
    dispatch(updateItem(data));
  };

  const handleDelete = async (id) => {
    await deleteItemApi(id);
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <button onClick={handleCreate}>Create Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.reserved_amount} - {item.status}
            <button onClick={() => handleUpdate(item.id)}>Update</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;