import React, { useState } from "react";
import "./index.css";

const Content = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(!isActive);
  }
  console.log(isActive);
  return (
    <div className="container">
      <h3>Choose One <span className="icon" onClick={handleClick}>▾</span></h3>
      {isActive && (
        <div className="container-option">
        <h5>React</h5>
        <h5>Vue</h5>
        <h5>Angular</h5>
        </div>
      )}
    </div>  
  )
}

const App = () => {
  return (
  <div>
    <Content />
  </div>
  )
};

export default App;
