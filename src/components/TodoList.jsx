// TodoList.js
import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleDelete }) => {
    return (
        <div className="border border-info rounded p-3 mb-3">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} handleDelete={() => handleDelete(index)} />
            ))}
        </div>
    );
};

export default TodoList;
