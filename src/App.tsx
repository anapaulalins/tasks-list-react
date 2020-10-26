import React from 'react';
import TodoForm from './pages/TodoForm';
import TodoList from './pages/TodoList';
import './styles/global.css'
function App() {
  return (
    <div className="App">
      <h1>My Tasks</h1>
      <TodoList />
    </div>
  );
}

export default App;
