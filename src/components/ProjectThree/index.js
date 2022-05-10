import React from 'react';

class Counter extends React.Component{
    state = {
        list: [
            {
                id: 1,
                counter: 1,
                increament: 1
            },
            {
                id: 2,
                counter: 5,
                increament: 2
            },
            {
                id: 3,
                counter: 10,
                increament: 5
            },
            {
                id: 4,
                counter: 7
            }
        ],
        sorted: null
    }

    handleClick = (el) => {
      const newItem = this.state.list.map(item => {
          if(item.id === el.id) {
             item.counter = item.counter + item.increament || 1;
          }
          return item;
      })
      this.setState({list: newItem})
    }
    handleSort = () => {
        if(this.state.sorted === null) {
          this.setState({sorted: true})
        }
        if(this.state.sorted === true){
          this.setState({sorted: false})
        }
        if(this.state.sorted === false) {
            this.setState({sorted: null})
        }

        const newItem = this.state.list.sort((a, b) => {
            if(this.state.sorted === true) {
              return a.counter - b.counter;
            }else if(this.state.sorted === false) {
              return b.counter - a.counter;
            } 
        })

        this.setState({list: newItem})
    }
    render(){
        return (
            <>
             {this.state.list.map(item => <div key={item.id}>{item.counter} <button onClick={() => this.handleClick(item)}>increament</button></div>)}
             <button onClick={this.handleSort}>sort</button>
            </>
        )
    }
}

class ProjectThree extends React.Component{
    render(){
        return(
            <>
              <Counter />
            </>
        )
    }
}

export default ProjectThree