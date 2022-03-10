import React, {useState} from 'react';
import './App.css';

const App = () =>  {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
     setValue(e.target.value)
  }
  console.log(value)
  return (
    <>
     <div>
       <input type="text" value={value} onChange={handleChange}/>
       <button>submit</button>
     </div>
     {value}
    </>
  );
}

export default App;
