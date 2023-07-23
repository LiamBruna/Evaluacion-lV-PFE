// App.js
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


const App = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => {
        setTodos((prevTodos) => [...prevTodos, text]);
    };

    const handleDelete = (index) => {
        setTodos((prevTodos) => prevTodos.filter((todo, i) => i !== index));
    };

    return (
        <div className="container border border-info rounded-3 mt-3 text-white">
            <h1 className="mt-3 mb-3">ToDo List</h1>
            <h3 className="mt-3 mb-3">Nombre tarea</h3>
            <TodoForm addTodo={addTodo} />
            <h3 className="mt-3 mb-3">Tareas por hacer</h3>
            <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
    );
};

export default App;
