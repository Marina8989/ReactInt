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
  const handleRemove = (el) => {
     const newList = todos.filter(item => item.id !== el.id);
     setTodos(newList)
  }
  useEffect(() => {
    
  }, [])
  console.log(todos)
    return(
        <>
          <form onSubmit={handleSubmit}>
              <input value={value} onChange={handleChange}  />
          </form>
          {todos.map(item => <div key={item.id}>
              <h3>Name: {item.name}</h3>
              <p>Bio: {item.bio}</p>
              <h6>Location: {item.location}</h6>
              <p>-------  --------</p>
              <button onClick={() => handleRemove(item)}>remove</button>
            </div>)}
        </>
    )
}

export default UserHook