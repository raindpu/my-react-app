import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (editText.trim() && editText !== todo.text) {
      onEdit(todo.id, editText.trim());
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {isEditing ? (
        <input
          type="text"
          className="edit-input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <span 
          className="todo-text"
          onDoubleClick={() => !todo.completed && setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      <div className="todo-actions">
        {!isEditing && !todo.completed && (
          <button 
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            ✏️
          </button>
        )}
        <button 
          className="delete-btn"
          onClick={() => onDelete(todo.id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;