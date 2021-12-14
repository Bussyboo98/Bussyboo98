import React, { useState } from 'react';
import './Reminder.css';

function Reminder() {
  const [content, setContent] = useState("");
  const [lists, setLists] = useState([]);
  const [count, setCount] = useState(0);
  
  const add = () => {
    setCount(prev => prev + 1);
    setLists([...lists, {
      id: lists.length,
      value: content
    }]);
    setContent("");
  }
  const del = (e) => {
    lists.splice(e,1);
    setLists([...lists])
  }
  
  return (
    <>
    <div className="reminder-container">
      <p>My List</p>
      <div className="reminder-input">
        <p>&#128221;</p>
        <input type="type" value={content} onInput={e => setContent(e.target.value)}/>
        <button onClick={add}>&#128466;</button>
      </div>
      <div className="reminder-list">
        <ul className="reminder-content">{
          lists.map((list, index) => {
            return (
            <>
            <li key={list.id} contenteditable="true" >{list.value} <button className="reminder-delete" onClick={() => del(index)}>&#128465;</button></li>
            </>
            )
          })
        }</ul>
      </div>
    </div>
    </>
    )
}

export default Reminder;