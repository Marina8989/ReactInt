import React, {useState} from 'react';
import Form from '././components/Form';
import './index.css';

function App() {
  const [theme, setTheme] = useState('light');
  const [buttonOption, setButtonOption] = useState(false);

  const handleSwitch = () => {
    setButtonOption(!buttonOption)
  }
    return(
        <div className='main'>
          <h3>Sign In</h3>
          <Form />
          <div>
            <button onClick={handleSwitch}>{buttonOption ? 'ON' : 'OFF'}</button>
          </div>
        </div>
    )
}

export default App