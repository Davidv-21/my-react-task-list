import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import TaskList from './components/TaskList';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Salir a caminar', completed: false },
    { id: 2, name: 'Lavar ropa', completed: false },
    { id: 3, name: 'Hacer trabajos', completed: false },
    { id: 4, name: 'Practicar ejercicios', completed: false }
  ]);
  const [newTaskName, setNewTaskName] = useState('');

  const handleAddTask = () => {
    if (newTaskName.trim() !== '') {
      const newTask = {
        id: Date.now(),
        name: newTaskName,
        completed: false
      };
      setTasks([...tasks, newTask]);
      setNewTaskName('');
    }
  };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <Header />
      <div className="input-container">
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Agregar tarea"
        />
        <button onClick={handleAddTask}>Agregar</button>
      </div>
      <TaskList
        tasks={tasks}
        onComplete={handleCompleteTask}
        onDelete={handleDeleteTask}
      />
    </div>
  );
};

export default App;
