import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
     setValue(e.target.value);
  }
  const handleSubmit = (e) => {
     e.preventDefault();
     const newItem = {
        id: `${Math.random() - Math.random()}`,
        value
     }
     const newList = [...list, newItem]
     setList(newList)
     setValue("");
  }
  const handleRemove = (el) => {
    const newItem = list.filter(item => item.id !== el.id);
    setList(newItem);
  }
  return (
  <div>
    <form onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange}/>
    </form>
    <ul>
     {list.map(item => <li key={item.id}>
       {item.value}
       <button onClick={() => handleRemove(item)}>X</button>
       </li>)}
    </ul>
  </div>
  )
};

export default App;
