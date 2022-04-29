import React from 'react';

class Counter extends React.Component{
    state = {
        list: [
            {
                id: 1,
                counter: 5,
                inrement: 1
            },
            {
                id: 2,
                counter: 10,
                increment: 5
            },
            {
                id: 3,
                counter: 7,
                increment: 7
            },
            {
                id: 4,
                counter: 1
            }
        ],
        sorted: null
    }
    handleIncrement = (el) => {
        const newCounter = this.state.list.map(item => {
            if(item.id === el.id) {
                item.counter += item.increment || 1;
            }
            return item;
        })
        this.setState({list: newCounter});
    }
    handleSort = () => {
        if(this.state.sorted === null) {
           this.setState({sorted: true})
        }
        if(this.state.sorted === true) {
           this.setState({sorted: false})
        }
        if(this.state.sorted === false) {
           this.setState({sorted: null})
        }

        const newList = this.state.list.sort((a,b) => {
            if(this.state.sorted === true) {
                return a.counter - b.counter
            }else if(this.state.sorted === false) {
                return b.counter - a.counter;
            }
        })

        this.setState({list: newList})
    }
    render(){
        return(
           <div>
             {this.state.list.map(item => <div key={item.id}>
                 {item.counter}
                 <button onClick={() => this.handleIncrement(item)}>increment</button>
             </div>)}
             <button onClick={this.handleSort}>sorted</button>
           </div>
        )
    }
}

class Project extends React.Component{
    render(){
        return(
            <>
             <Counter />
            </>
        )
    }
}
export default Project