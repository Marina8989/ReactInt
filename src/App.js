import React from 'react';

const App = () => {
    return(
        <div style={{textAlign: 'center'}}>
         <h1>Create Account</h1>
         <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
             <h1>o</h1>
             <h1>o</h1>
             <h1>o</h1>
             <h1>o</h1>
         </div>
         <p>or use your email for registration:</p>
         <input type="text" placeholder="Name" /> <br /><br />
         <input type="email" placeholder="Email" /><br /><br />
         <input type="password" placeholder="Password" /><br /><br />
         <input type="checkbox" />
         <span>I agree to the Terms and Privacy Policy</span><br /><br />
         <button>Sign Up</button>
         <button>Sign In</button>
        </div> 
    )
}

export default App;