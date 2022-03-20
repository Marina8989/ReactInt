import React, { useState } from "react";
import "./index.css";

const Content = () => {
  const [isActive, setIsActive] = useState(false);
  const options = ['React', 'Vue', 'Angular'];
  const [name, setName] = useState("Choose One");

  const handleClick = () => {
    setIsActive(!isActive);
  }
  const handleOption = (e) => {
    setName(e.target.innerText);
    setIsActive(false);
  }
  return (
    <div className="container">
      <h3>{name} <span className="icon" onClick={handleClick}>▾</span></h3>
      {isActive && (
        <div className="container-option">
        {options.map(option => <h5 key={option} onClick={handleOption}>{option}</h5>)}
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
