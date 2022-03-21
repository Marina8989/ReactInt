import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import "./index.css";

const data = [
  {id: 1, country: "Italy"},
  {id: 2, country: "Hungary"},
  {id: 3, country: "Spain"},
  {id: 4, country: "Ireland"}
]

const App = () => {
  const [options, setOptions] = useState(data)
  return (
  <div>
   <Multiselect options={options} displayValue="country"/>
  </div>
  )
};

export default App;
