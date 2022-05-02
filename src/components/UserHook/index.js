import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UserHook = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
     setValue(e.target.value);
  }
  const handleSubmit = (e) => {
     e.preventDefault();
     setTodos([...todos, value]);
     setValue('');
  }
    return(
        <>
          <form onSubmit={handleSubmit}>
              <input value={value} onChange={handleChange}  />
          </form>
          {todos.map(item => <li key={item}>{item}</li>)}
        </>
    )
}

export default UserHook