
import React, { useState } from 'react';

function Task({ task, onDelete, onEdit, onToggle })
 {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  return (
    <div className='task-container'>
      {isEditing ? (
        <div>
          <input className='task-input'
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button task-button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(task.id)}
          />
          {task.text}
          <button task-button onClick={handleEdit}>Edit</button>
          <button task-button onClick={() => onDelete(task.id)}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Task;