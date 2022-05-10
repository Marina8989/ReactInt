import React from 'react';

class ProjectFive extends React.Component{
    state = {
        list: [
            {
                one: 'option 1',
                two: ['wow', 'cool', 'sick'],
                show: false
            },
            {
                one: 'option 2',
                two: ['wow', 'cool', 'sick'],
                show: false
            },
            {
                one: 'option 3',
                two: ['wow', 'cool', 'sick'],
                show: false
            }
        ]
    }

    handleClick = (el) => {
      const newList = this.state.list.map(item => {
          if(item.one === el.one) {
             item.show = !item.show
          }
          return item;
      })
      this.setState({list: newList})
    }
    render(){
        return (
            <ol>
               {this.state.list.map(item => <li key={item.one} onClick={() => this.handleClick(item)}>
                   {item.one} 
                   {item.show && <ul>{item.two.map(el => <li key={el}>{el}</li>)}</ul>}
                </li>)}
            </ol>
        )
    }
}

export default ProjectFive