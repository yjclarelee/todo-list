import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Main() {
  const [todoItem, setTodoItem] = React.useState({todo: '', isStrike: false});
  const [todoList, setTodoList] = React.useState([]);
  // string is null -> do nothing
  // string is in array -> setTodo to ''
  const handleInput = () => {
    // input when todoItem exists
    if (todoItem) {
      // prevent same item
      if (!todoList.some(data => data.todo === todoItem.todo)) {
        setTodoList([...todoList, todoItem]);
      }
        setTodoItem({});
    }
  };

  const handleStrike = (idx) => {
    setTodoList([...todoList.map((item, itemIdx) =>
      itemIdx !== idx ? item : { todo: todoList[idx].todo, isStrike: !todoList[idx].isStrike }
    )])
  }

  const listItem = (idx) => {
    return (
      <div key={`list-${idx}`} style={{ display: 'flex' }}>
        <button onClick={() => handleStrike(idx)}>V</button>
        <li key={idx}>{todoList[idx].isStrike ? <del>{todoList[idx].todo}</del> : todoList[idx].todo}</li>
        <button onClick={() => setTodoList([...todoList.filter(item => item.todo !== todoList[idx].todo)])}>X</button>
      </div>  
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Header />
      <div>
        <input type="text" value={todoItem.todo || ''} onChange={(e) => setTodoItem({todo: e.target.value, isStrike: false})} onKeyDown={(e) => {e.key === 'Enter' && handleInput()}}/>
        <button type="button" onClick={handleInput}>Add</button>
      </div>
      <ul style={{listStyleType: 'none'}}>
         {(todoList.length !== 0) && todoList.map((item, idx) => listItem(idx))}
      </ul>
      <Footer/>
    </div> 
  )
}
