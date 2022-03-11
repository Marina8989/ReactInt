import React, {useState} from 'react';
import './App.css';

const App = () =>  {
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSignUp = () => {
   setIsSignUp(!isSignUp)
 }

 const returnOption = () => {
   if(isSignUp) {
     return (
       <>
        <h3>SIGN UP</h3>
        <form>
         <input type="text" placeholder="First Name" /><br /><br />
         <input type="text" placeholder="Second Name" /><br /><br />
         <input type="email" placeholder="Email" />
       </form>
       <div>
        <h3>Don't have an account?</h3>
        <button onClick={handleSignUp}>sign up</button><br />
       </div>
       </>
     )
   }
   if(!isSignUp){
     return (
       <>
        <h3>SIGN IN</h3>
        <form>
         <input type="text" placeholder="Accoint ID" /><br /><br />
         <input type="email" placeholder="Email" />
       </form>
       <div>
        <h3>Already have an account?</h3>
        <button onClick={handleSignUp}>sign In</button><br />
       </div>
       </>
     )
   }
 }


  return (
    <>
       {returnOption()}
      <div>
        <button onClick={handleSignUp}>start</button>
      </div>
    </>
  );
}

export default App;
