import React from "react";
import "./index.css";

const App = () => {
  return (
  <div className="main">
    <h3>Create Account</h3>
    <div className="icons">
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
      <div className="icon"></div>
    </div>
    <h6>or use your email for registration</h6>
    <div className="inputs">
      <input type="text" placeholder="Name" /><br/>
      <input type="email" placeholder="Email" /><br/>
      <input type="number" placeholder="Password" /><br/>
    </div>
    <div className="ckeck-input">
      <input type="checkbox" />
      <h6> I agree to the Terms and Privacy Policy</h6>
    </div>
    <div className="buttons">
      <button>Sign Up</button>
      <button>Sign In</button>
    </div>
  </div>
  )
};

export default App;