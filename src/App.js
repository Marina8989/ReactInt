import React, { useState } from "react";
import "./index.css";

function App () {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);

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

  return (
    <div>
      <h2>react app</h2>
      <form onSubmit={handleSubmit}>
        <input value={value} onChange={handleChange} />
      </form>
      <ul>
        {list.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  )
}

export default App;