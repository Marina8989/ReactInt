import React from 'react';

function Header(props) {
    return (
       <>
         <h3>Hello, {props.name}! How are you?</h3>
         <h4>Did you know that your mama loves you a lotttt?</h4>
         <h5>{props.number}</h5>
       </>
    )
}

const App = () => {
    return(
        <>
          <Header name='Jono' number='5'/>

        </>
    )
}

export default App;