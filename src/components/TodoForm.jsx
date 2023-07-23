// TodoForm.js
import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim() === '') return;
        addTodo(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3 mb-4">
            <div className="input-group">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="form-control"
                    placeholder="Ingrese una tarea..."
                    required
                />
                <button type="submit" className="btn btn-primary">
                    Añadir
                </button>
            </div>
        </form>
    );
};

export default TodoForm;
