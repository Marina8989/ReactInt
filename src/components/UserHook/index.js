import React, {useState, useEffect} from 'react';
import axios from 'axios';

const UserHook = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
     setValue(e.target.value);
  }
  const getUser = async(user) => {
      const {data} = await axios(`https://api.github.com/users/${user}`);
      console.log(data)
      setTodos([...todos, data]);
  }
  const handleSubmit = (e) => {
     e.preventDefault();
     getUser(value);
     setValue('');
  }
  useEffect(() => {
    
  }, [])
  console.log(todos)
    return(
        <>
          <form onSubmit={handleSubmit}>
              <input value={value} onChange={handleChange}  />
          </form>
          {todos.map(item => <li key={item.id}>{item.name}</li>)}
        </>
    )
}

export default UserHook