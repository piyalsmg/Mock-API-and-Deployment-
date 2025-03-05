import React, { useEffect, useState } from 'react';
import { fetchItems, createItem, deleteItem } from './api';
import ItemList from './components/ItemList';
import AddItemForm from './components/AddItemForm';



interface Item {
  id: number;
  title: string;
  body: string;
}


const App: React.FC = () => {
  // State for the list of items
  const [items, setItems] = useState<Item[]>([]);
  // State for the currently edited item (null if not editing)
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  // State for sorting (default: none)
  const [sortBy, setSortBy] = useState<'title' | 'id' | null>(null);
  // State for filtering (default: no filter)
  const [filterText, setFilterText] = useState('');

  // Add a new item
  const handleAddItem = (title: string, body: string) => {
    const newItem: Item = {
      id: Date.now(),
      title,
      body,
    };
    setItems([...items, newItem]);
  };

  // Delete an item
  const handleDeleteItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Start editing an item
  const handleEditItem = (item: Item) => {
    setEditingItem(item);
  };

  // Save the edited item
  const handleSaveEdit = (id: number, updatedTitle: string, updatedBody: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, title: updatedTitle, body: updatedBody } : item
      )
    );
    setEditingItem(null); // Stop editing
  };

  // Clear the list
  const handleClearList = () => {
    setItems([]);
  };

  // Sort items by title or ID
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'title') {
      return a.title.localeCompare(b.title);
    } else if (sortBy === 'id') {
      return a.id - b.id;
    }
    return 0; // No sorting
  });

  // Filter items by title or body
  const filteredItems = sortedItems.filter(
    (item) =>
      item.title.toLowerCase().includes(filterText.toLowerCase()) ||
      item.body.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Item Dashboard</h1>

      {/* AddItemForm for adding new items */}
      <AddItemForm onSubmit={handleAddItem} />

      {/* Sorting and Filtering Options */}
      <div className="my-4 space-y-2">
        <label className="block font-medium">Sort By:</label>
        <select
          value={sortBy || ''}
          onChange={(e) => setSortBy(e.target.value as 'title' | 'id' | null)}
          className="p-2 border rounded"
        >
          <option value="">None</option>
          <option value="title">Title</option>
          <option value="id">ID</option>
        </select>

        <label className="block font-medium">Filter:</label>
        <input
          type="text"
          placeholder="Filter by title or description"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* ItemList to display items */}
      <ItemList
        items={filteredItems}
        onDelete={handleDeleteItem}
        onEdit={handleEditItem}
        editingItem={editingItem}
        onSaveEdit={handleSaveEdit}
      />

      {/* Button to clear the list */}
      <button
        onClick={handleClearList}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Clear List
      </button>
    </div>
  );
};

export default App;