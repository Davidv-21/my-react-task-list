import React from 'react';

const Task = ({ task, onComplete, onDelete }) => {
  const handleCheckboxChange = () => {
    onComplete(task.id);
  };

  const handleDeleteClick = () => {
    onDelete(task.id);
  };

  return (
    <div className="task"> 
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
      <span className={task.completed ? 'completed' : ''}>{task.name}</span>
      <button onClick={handleDeleteClick}>Eliminar</button>
    </div>
  );
};

export default Task;
