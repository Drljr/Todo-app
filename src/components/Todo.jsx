import React from "react";
import { UilTrash } from '@iconscout/react-unicons'
import { UilCheckSquare } from '@iconscout/react-unicons'

function Todo({ text,todo, todos, setTodos }) {
    const deleteHandler = (d) => {
        d.preventDefault();
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
const completeHandler = (c) => {
    c.preventDefault();
    setTodos(todos.map(item => {
        if (item.id === todo.id) {
            return {
                ...item, completed: !item.completed
            };
        }
        return item;
    }))
}
    return (
        <div className="TOdo">
            <label >
            <li className={`Todo-item ${todo.completed ? "completed" : ""}`}>{text}

            
                <button onClick={completeHandler} className="complete-btn" >
                    <i className="fa-check" ></i>
                <UilCheckSquare />
                </button>
            
                <button onClick={deleteHandler} className="trash-btn">
                <i className="fa-trash"></i>
                < UilTrash />
            </button>
            </li>
            </label>
        </div>
    );
}
export default Todo;