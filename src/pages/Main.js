import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Main() {
  const [todoItem, setTodoItem] = React.useState('');
  const [todoList, setTodoList] = React.useState([]);
  // string is null -> do nothing
  // string is in array -> setTodo to ''
  const handleInput = () => {
    // input when todoItem exists
    if (todoItem) {
      // prevent same item
      if (!todoList.includes(todoItem)) {
        setTodoList([...todoList, todoItem]);
      }
        setTodoItem('');
    }
  };

  const listItem = (todo, idx) => {
    return (
      <div key={`list-${idx}`} style={{ display: 'flex' }}>
        <li key={`text-${idx}`}>{todo}</li>
        <button key={`deleteButton-${idx}`} onClick={() => setTodoList([...todoList.filter(item => item !== todo)])}>X</button>
      </div>
    )
  }


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <div>
        <input type="text" value={todoItem} onChange={(e) => setTodoItem(e.target.value)} onKeyDown={(e) => {e.key === 'Enter' && handleInput()}}/>
        <button type="button" onClick={handleInput}>Add</button>
      </div>
      <ul>
         {(todoList.length !== 0) && todoList.map((todo, idx) => listItem(todo, idx))}
      </ul>
      <Footer/>
    </div> 
  )
}
