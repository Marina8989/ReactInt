import React, {useState} from 'react';
import './index.css';

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
          complete: false
      }
      const newList = [...list, item];
      setList(newList)
      setValue("");
    }
    const handleToggle = (el) => {
      const newItem = list.map(item => {
          if(item.id === el.id){
             el.complete = !el.complete;
          }
          return item;
      })
      setList(newItem);
    }
    const handleRemove = (el) => {
       const newItem = list.filter(item => item.id !== el.id)
       setList(newItem)
    }
    const handleSearchValue = (e) => {
      setSearchValue(e.target.value);
      const newList = list.filter(item => item.value.includes(searchValue))
      setList(newList)
    }
    return(
        <div>
          <form onSubmit={handleSubmit}>
              <input type="text" value={value} onChange={handleChange}/>
          </form>
           <input value={searchValue} onChange={handleSearchValue} />
          <ul>
              {list.map(item => {
                  return ( 
                      <li key={item.id} className={`${item.complete ? 'cyan' : ''}`}>
                       {item.value}
                      <button onClick={() => handleToggle(item)}>toggle</button>
                      <button onClick={() => handleRemove(item)}>remove</button>
                      </li>
                  )
              })}
          </ul>
        </div> 
    )
}

export default App;