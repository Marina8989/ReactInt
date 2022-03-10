import React, {useState} from 'react';
import './App.css';

const App = () =>  {
  const [value, setValue] = useState('')
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleChange = (e) => {
     setValue(e.target.value)
  }

  const checkForPalindrom = (val) => {
    console.log(val)
    if(value.split('').reverse().join('') === val){
      console.log(true)
      setFail(false)
      setSuccess(true)
      setValue('')
    }else {
      setFail(true)
      setSuccess(false)
      setValue('')
    }
    
  }
  return (
    <>
     <div>
       <input type="text" value={value} onChange={handleChange}/>
       <button onClick={(e) => checkForPalindrom(value)}>submit</button>
     </div>
     {value}
      {success && <h3>Yes, it is palindrom</h3> }
      {fail && <h3>No, it is not a palindrom</h3>}
    </>
  );
}

export default App;
