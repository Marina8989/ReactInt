import React from 'react';
import './index.css';

class Buttons extends React.Component{
    render() {
        return (
            <div className='main-btn'>
              <input type='checkbox' /><span>i agree to the Terms and Privacy Policy</span><br />
              <button>Sign Up</button>
              <button>Sign In</button>
            </div>
        )
    }
}

export default Buttons