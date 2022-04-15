import React from 'react';
import './index.css';

function Form() {
    const handleChange = () => {}
    const handleSubmit = () => {}
    return (
        <form onSubmit={handleSubmit}>
          <input value='Username' onChange={handleChange}/><br />
          <input value='Password' onChange={handleChange}/><br />
          <button type='submit' className='btn-sing-in'>Sign In</button>
          <h6>Forgot Password?</h6>
        </form>
    )
}
export default Form