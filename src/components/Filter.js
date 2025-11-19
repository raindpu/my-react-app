import React from 'react';
import './Filter.css';

function Filter({ filter, setFilter, activeTodoCount, completedTodoCount }) {
  return (
    <div className="filter-container">
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active ({activeTodoCount})
        </button>
        <button 
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed ({completedTodoCount})
        </button>
      </div>
    </div>
  );
}

export default Filter;