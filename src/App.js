import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import List from './List';

function App() {
  const [list, setList] = useState([]);

  const addToList = (newItem) => {
    setList([...list, {label: newItem, isDone: false, isStriked: false}])
  }

  const markDone = (index) => {
    const newList = [...list];
    newList[index]['isDone'] = true;
    setList(newList);
  }

  return (
    <div className="App">
      <h1>To Do List</h1>

      <br />
      <Form addToList={addToList} />
      <List list={list} markDone={markDone} />
    </div>
  );
}

export default App;
