import React from 'react';
import './index.css';

class Inputs extends React.Component{
    render() {
        return (
            <div className='main-inputs'>
              <input type='text' placeholder='Name...' /><br/>
              <input type='password' placeholder='Password...' /><br/>
              <input type='email' placeholder='Email...' /><br/>
            </div>
        )
    }
}

export default Inputs