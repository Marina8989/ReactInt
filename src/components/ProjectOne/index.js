import React from 'react';

class ProjectOne extends React.Component{
    render(){
        return(
            <div style={{textAlign: 'center'}}>
               <h2>Create Account</h2>
               <div style={{display: 'flex', justifyContent: 'space-around'}}>
                   <p>X</p>
                   <p>X</p>
                   <p>X</p>
                   <p>X</p>
               </div>
               <h5>or use your email for registration</h5>
               <div>
                   <input placeholder="Name" type="text" /><br /><br />
                   <input placeholder="Email" type="email" /><br /><br />
                   <input placeholder="Password" type="password" /><br /><br />
                   <input type="checkbox" /><span> I agree with terms and conditions</span>
               </div>
               <div>
                   <button style={{marginRight: '10px'}}>Sign Up</button>
                   <button style={{marginLeft: '10px'}}>Sign In</button>
               </div>
            </div>
        )
    }
}

export default ProjectOne;