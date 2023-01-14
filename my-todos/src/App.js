import React, { useState } from 'react';
import './App.css';
import ToDo from './components/todo';

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState('');

  const handleOnClick = () => {
    if(value) {
      setTodos(prev => [...prev, {id: prev.length, status: 'active', title: value}]);
      setValue('')
    }
  }

  const handleOnToDoClick = (id) => {
    const newTodos = [...todos];

    const changedTodo = todos.find((todo) => todo.id === id);

    if(changedTodo.status === 'active') {
      changedTodo.status = 'inactive';
      setTodos(newTodos)
    }
  }

  return (
    <div>
      <h1>My ToDos</h1>
      <div className="container">
        <div className="todosContainer">
            {
              todos.map(({title, id, status}) => <ToDo key={id} status={status} title={title} onClick={() => {handleOnToDoClick(id)}} />)
            }
        </div>
        <div className="form">
          <input value={value} type="text" onChange={(e) => setValue(e.target.value)} />
          <button type='button' onClick={handleOnClick}>Add todo</button>
        </div>
      </div>
    </div>
  );
}

export default App;
