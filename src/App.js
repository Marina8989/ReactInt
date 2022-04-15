import React, {useState} from 'react';
import {ThemeProvider} from 'styled-components';
import './index.css';

function App() {
    const [buttonSwitch, setButtonSwitch] = useState(false);
    const [theme, setTheme] = useState('light')

    const handleSwitch = () => {
      if(buttonSwitch === false) {
         setButtonSwitch(true);
         setTheme('light')
      }
      if(buttonSwitch === true) {
         setButtonSwitch(false);
         setTheme('dark')
      }
    }
    return(
        <ThemeProvider theme={{theme}}>
            <div className={buttonSwitch ? 'light' : 'dark'}>
            <button onClick={handleSwitch}>{buttonSwitch ? 'ON' : 'OFF'}</button>
            </div>
        </ThemeProvider>
    )
}
export default App