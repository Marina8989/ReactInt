import React, {useState} from 'react';
import './App.css';

const App = () =>  {
  const [value, setValue] = useState('');
  const [list, setList] = useState([])
  const listArr = ['Jono', 'Marina', 'Lashandra', 'Bob', 'Lucia', 'Sofia', 'Erik', 'Jerald', 'Mary', 'Brian', 'Bernard']
  const newArr = []

  const handleChange  = (e) => {
     setValue(e.target.value)
     const x = listArr.map(item => {
       if(item.substring(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase()) {
         newArr.push(item)
         console.log('newArr', newArr)
       }
     })
  }
 console.log(newArr)
  return (
    <div className="container">
      <input value={value} onChange={(e) => handleChange(e)}/>
      {newArr.map(el => <li key={el}>{el}</li>)}
    </div>
  );
}

export default App;
