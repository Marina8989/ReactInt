import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  const handleChange = (e) => {
   setValue(e.target.value);
  }
  const handleSubmit = (e) => {
     e.preventDefault();
     const item = {
       id: `${Math.random() - Math.random()}`,
       value,
       complete: false,
       priority: 0
     }
     const newList = [...list, item];
     setList(newList);
     setValue("");
  }
  const handleToggle = (el) => {
    const newItem = list.map(item => {
      if(item.id === el.id){
         item.complete = !item.complete;
      }
      return item;
    })
    setList(newItem);
  }
  const handleRemove = (el) => {
    const newItem = list.filter(item => item.id !== el.id);
    setList(newItem);
  }
  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    const newItem = list.filter(item => item.value.includes(searchValue));
    setList(newItem)
  }
  const handlePriority = (el) => {
     console.log(el.priority)
     console.log(el)
     const newItem = list.map(item => {
       if(item.id === el.id) {
           item.priority += 1
       }
       return item;
     })
     setList(newItem)
     console.log(el.priority)
     console.log(el)
  }
  const handleSort = () => {
    const newItem = list.sort((a, b) => {
      if(a.priority < b.priority) {
         console.log('a', a.priority)
      }
      if(a.priority > b.priority) {
        console.log('b', b.priority)
     }
    })
    setList(newItem);
  }
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange}/>
    </form>
      <input value={searchValue} onChange={handleSearch}/>
    <ul>
      {list.map(item => <li key={item.id} className={`${item.complete ? 'cyan' : ''}`}>
        <h5>{item.value} / <span onClick={() => handlePriority(item)}>priority: {item.priority}/</span></h5>
        <button onClick={() => handleToggle(item)}>toggle</button>
        <button onClick={() => handleRemove(item)}>remove</button>
        </li>)}
    </ul>
    <button onClick={handleSort}>sort</button>
  </div>
  )
};

export default App;
