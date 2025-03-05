import React, { useState } from 'react';

interface Item {
  id: number;
  title: string;
  body: string;
}

interface ItemListProps {
  items: Item[];
  onDelete: (id: number) => void;
  onEdit: (item: Item) => void;
  editingItem: Item | null;
  onSaveEdit: (id: number, title: string, body: string) => void;
}

const ItemList: React.FC<ItemListProps> = ({
  items,
  onDelete,
  onEdit,
  editingItem,
  onSaveEdit,
}) => {
  // State for the edited title and body
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  // Handle starting the edit process
  const handleStartEdit = (item: Item) => {
    onEdit(item);
    setEditTitle(item.title);
    setEditBody(item.body);
  };

  // Handle saving the edited item
  const handleSave = (id: number) => {
    onSaveEdit(id, editTitle, editBody);
    setEditTitle('');
    setEditBody('');
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="p-4 border rounded shadow-sm">
          {editingItem?.id === item.id ? (
            // Edit mode
            <div>
              <input
                type="text"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <textarea
                value={editBody}
                onChange={(e) => setEditBody(e.target.value)}
                className="w-full p-2 border rounded mb-2"
              />
              <button
                onClick={() => handleSave(item.id)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Save
              </button>
            </div>
          ) : (
            // Display mode
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.body}</p>
              <button
                onClick={() => handleStartEdit(item)}
                className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(item.id)}
                className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ItemList;