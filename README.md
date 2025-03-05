# Task Management App with React, TypeScript, and Tailwind CSS

Welcome to the **Task Management App**! This is a simple yet powerful application built with **React**, **TypeScript**, and **Tailwind CSS**. It allows you to manage a list of tasks, including adding new tasks, editing existing ones, deleting tasks, and sorting or filtering the list. The app uses **JSONPlaceholder** as a mock API to simulate real-world server interactions.

---

## Features

Here’s what you can do with this app:

1. **Fetch Tasks**: Automatically loads a list of tasks from the mock API when the app starts.
2. **Add New Tasks**: Easily add new tasks with a title and description.
3. **Edit Tasks**: Update the title or description of any task.
4. **Delete Tasks**: Remove tasks you no longer need.
5. **Sort Tasks**: Sort the list of tasks by **title** or **ID**.
6. **Filter Tasks**: Search for specific tasks by typing in the filter box.
7. **Responsive Design**: The app looks great on both desktop and mobile devices.

---

## How to Use the App

### 1. **Getting Started**
- Open the app in your browser.
- When the app loads, it will automatically fetch and display a list of tasks.

### 2. **Adding a New Task**
- Scroll to the top of the page to find the **Add Task** form.
- Enter a **title** and **description** for your task.
- Click the **Add Item** button to save the task. It will appear in the list below.

### 3. **Editing a Task**
- Find the task you want to edit in the list.
- Click the **Edit** button next to the task.
- The task will switch to edit mode, allowing you to update the title and description.
- Make your changes and click the **Save** button to update the task.

### 4. **Deleting a Task**
- Find the task you want to delete in the list.
- Click the **Delete** button next to the task.
- The task will be removed from the list immediately.

### 5. **Sorting Tasks**
- Use the **Sort By** dropdown menu to sort the list:
  - **None**: Displays tasks in the default order.
  - **Title**: Sorts tasks alphabetically by title.
  - **ID**: Sorts tasks by their ID.

### 6. **Filtering Tasks**
- Type in the **Filter** input box to search for specific tasks.
- The list will update dynamically to show only tasks that match your search term (searches both title and description).

### 7. **Clearing the List**
- Click the **Clear List** button to remove all tasks from the list.

---

## Mock API Integration

The app uses **JSONPlaceholder**, a free mock API service, to simulate server interactions. Here are the endpoints used:

| Endpoint                | Method | Description                          |
|-------------------------|--------|--------------------------------------|
| `/posts`                | GET    | Fetch the list of tasks.             |
| `/posts`                | POST   | Add a new task to the list.          |
| `/posts/:id`            | PUT    | Update an existing task.             |
| `/posts/:id`            | DELETE | Delete a task from the list.         |

---

## Folder Structure

Here’s how the project is organized:

```
src/
├── components/          # Reusable components
│   ├── ItemList.tsx     # Displays the list of tasks
│   ├── AddItemForm.tsx  # Form for adding new tasks
├── api/                 # API service functions
│   ├── index.ts         # Handles API calls
├── App.tsx              # Main application component
├── index.tsx            # Entry point of the app
├── styles/              # Custom styles (if any)
└── README.md            # Project documentation
```

---

## How to Run the Project Locally

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/react-task-management-app.git
   cd react-task-management-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**:
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open the App**:
   - The app will open automatically in your browser at `http://localhost:3000`.
   - If it doesn’t, manually navigate to the URL.

---

## Deployment

The app is deployed using **Vercel**, a platform for hosting React applications. You can access the live version here:  
[Live Demo](https://your-vercel-app-url.vercel.app)

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript for better code quality.
- **Tailwind CSS**: A utility-first CSS framework for rapid styling.
- **JSONPlaceholder**: A free mock API for testing and prototyping.
- **Vercel**: A platform for deploying and hosting React apps.

---

## Extra Features

1. **Edit Tasks**: You can update the title and description of any task.
2. **Sort and Filter**: Sort tasks by title or ID, and filter them using a search box.

---

## Error Handling

The app includes basic error handling for API calls. If something goes wrong (e.g., the API fails to fetch or update data), an error message will be displayed in the console.

---

## Contributing

If you’d like to contribute to this project, feel free to open a pull request. Your contributions are welcome!

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or feedback, feel free to reach out:  
**Name**:  Piyal Senarathna
**Email**: piyalsmg@gmail.com
**GitHub**:(https://github.com/piyalsmg)

---

Enjoy managing your tasks with this app! 🚀
