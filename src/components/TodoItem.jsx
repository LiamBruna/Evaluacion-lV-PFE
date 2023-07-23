// TodoItem.js
import React from 'react';

const TodoItem = ({ todo, handleDelete }) => {
    return (
        <div className="d-flex align-items-center mb-2">
            <div>{todo}</div>
            <button onClick={handleDelete} className="btn btn-sm btn-danger ms-auto">
                Eliminar
            </button>
        </div>
    );
};

export default TodoItem;
