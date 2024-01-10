import React from 'react';
import TodoList from './TodoList';




function form({setInputText,todos, setTodos, inputText, setStatus, filteredTodos}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Math.random()*1000 }
        ]);
        setInputText(" ");
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
            <fieldset id="stack">
            <h1 id="header"> Todo App</h1>
            <div className="select">
                    <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
                <input value={inputText} onChange={inputTextHandler} type="text" className="task-input" placeholder = "Add your new todo"/>
                <button onClick={submitTodoHandler} className="todo-button" type="submit">
                    <i className= "plus-square">+</i>
                </button>
                <TodoList
                    setTodos={setTodos}
                    todos={todos}
                    filteredTodos={filteredTodos}
                />
            </fieldset>
        </form>
    );
}
export default form;