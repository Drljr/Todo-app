import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'




function App() {

  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //running once
  useEffect(() => {
    getLocalTodos();
  }, []);
    //useEffect
  useEffect(() => {
      const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    }

    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  //functions
//save to local
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos([todoLocal]);
    }
  };
  return (
    <div className="App">
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />

    </div>
  );
}
export default App;
