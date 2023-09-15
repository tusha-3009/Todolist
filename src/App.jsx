
import React, { useState, useEffect } from 'react';
import Task from './Task';
import "./index.css";
function App() {

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    console.log(storedTasks, 'tak')
    setTasks(storedTasks);
  }, []);

  
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

// useEffect(() => {

//   }, [tasks]);
  
  const handleAddTask = () => {
    if (newTask.trim() === '') return;
    const newTasks = [...tasks, { id: Date.now(), text: newTask, completed: false }];
    console.log(newTasks)
    setTasks(newTasks);
        localStorage.setItem('tasks', JSON.stringify(newTasks));
    setNewTask('');
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const handleEditTask = (taskId, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
  };

  const handleToggleTask = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input className='task-input'
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      <div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onEdit={handleEditTask}
            onToggle={handleToggleTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

//hook is used in function component
//usestate is hook, adds react state to function component
//it has current state and update function


//By using useEffect Hook, you tell React that your component needs to do something after render