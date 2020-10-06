import React from 'react';
import logo from './logo.svg';
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import './App.css';

function App() {
  const todos = useSelector(state => state.todos);
  return (
    <div className="App">
      <NewTodoForm/>
      {todos.map(todo => <Todo text={todo.todo} id={todo.id} key={todo.id}/>)}
    </div>
  );
}

export default App;
