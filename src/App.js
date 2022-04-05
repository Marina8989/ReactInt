import React, { useState } from "react";
import "./index.css";

function App () {
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
      complete: false
    }
    const newItem = [...list, item];
    setList(newItem);
    setValue("");
  }

  const handleToggle = (el) => {
    console.log('hellooo')
   const newItem = list.map(item => {
     if(item.id === el.id) {
       item.complete = !item.complete;
       console.log(item.complete, item.id)
     }
     return item;
   })
   setList(newItem)
  }
  const handleRemove = (el) => {
     const newItem = list.filter(item => item.id !== el.id)
     setList(newItem)
  }
  const handleSearchValue = (e) => {
    setSearchValue(e.target.value)
    const newItem = list.filter(item => item.value.includes(searchValue)) 
    setList(newItem)
  }
  return (
    <div>
      <h2>react app</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
      </form>
      <input value={searchValue} onChange={handleSearchValue} />
      <ul>
        {list.map(item => <li key={item.id}>
           <span>{item.value}</span>
           <button onClick={() => handleRemove(item)}>remove</button>
        </li>)}
      </ul>
    </div>
  )
}

export default App;