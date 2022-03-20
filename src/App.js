import React, { useState } from "react";
import "./index.css";

const state = [
  {
    id: 1,
    value: 5,
    increment: 5
  },
  {
    id: 2,
    value: 10,
    increment: 7
  },
  {
    id: 3,
    value: 15,
    increment: 20
  },
  {
    id: 4,
    value: 20,
    increment: 2
  }
]

const Component = (props) => {
  const {id, value, increment} =  props;
  console.log(increment)
  return (
     <div>
       <span>{value}</span>
       <button onClick={() => props.handleIncrement(id)}>increment by {increment}</button>
     </div>
  )
}

const App = () => {
  const [list, setState] = useState(state);

  const handleIncrement = (el) => {
    const newItem = list.map(item => {
        if(item.id === el) {
          item.value += item.increment || 1;
        }
        return item;
    })
    setState(newItem)
  }
  return <div>
    {list.map(item => <Component key={item.id} value={item.value} increment={item.increment}  handleIncrement={() => handleIncrement(item.id)}/>)}
  </div>;
};

export default App;
