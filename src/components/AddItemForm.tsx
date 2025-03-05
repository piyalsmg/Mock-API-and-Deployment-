import React, { useState } from 'react';

// Define the props interface for the AddItemForm component
interface AddItemFormProps {
  onSubmit: (title: string, body: string) => void; // Callback function to handle form submission
}

// Define the AddItemForm component as a functional component
const AddItemForm: React.FC<AddItemFormProps> = ({ onSubmit }) => {
  // State to manage the title input value
  const [title, setTitle] = useState('');
  // State to manage the body/description input value
  const [body, setBody] = useState('');

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Call the onSubmit callback passed from the parent component with the title and body values
    onSubmit(title, body);

    // Clear the form fields after submission
    setTitle('');
    setBody('');
  };

  return (
    // Form element with an onSubmit event handler
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Input field for the title */}
      <input
        type="text"
        placeholder="Title"
        value={title} // Bind the input value to the title state
        onChange={(e) => setTitle(e.target.value)} // Update the title state on input change
        className="w-full p-2 border rounded"
        required // Make the field required
      />
      {/* Textarea field for the description */}
      <textarea
        placeholder="Description"
        value={body} // Bind the textarea value to the body state
        onChange={(e) => setBody(e.target.value)} // Update the body state on input change
        className="w-full p-2 border rounded"
        required // Make the field required
      />
      {/* Submit button to add the item */}
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Item
      </button>
    </form>
  );
};

export default AddItemForm;