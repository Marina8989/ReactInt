import React from 'react';

class Counter extends React.Component{
    state = {
        counter: this.props.counterIncrement
    }
    handleIncrement = () => {
        this.setState({ counter : this.state.counter + (this.props.increment || 1)})
    }
    render(){
        return(
           <>
             {this.state.counter}
             <button onClick={this.handleIncrement}>increment</button>
           </>
        )
    }
}

class Project extends React.Component{
    render(){
        return(
            <>
             <Counter counterIncrement={5} increment={7}/>
             <Counter counterIncrement={10} increment={1}/>
             <Counter counterIncrement={5} />
            </>
        )
    }
}
export default Project