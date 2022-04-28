import React from 'react';
import './index.css';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Buttons from './components/Buttons';

class App extends React.Component{
  render() {
    return(
      <>
        <Header />
        <Inputs />
        <Buttons />
      </>
    )
  }
}

export default App