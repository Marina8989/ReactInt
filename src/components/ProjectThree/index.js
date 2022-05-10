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
        ]
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
    render(){
        return (
            <>
             {this.state.list.map(item => <div key={item.id}>{item.counter} <button onClick={() => this.handleClick(item)}>increament</button></div>)}
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