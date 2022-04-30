import React from 'react';
import './index.css';

const Item = (props) => {
   return (
      <li className={props.item.completed ? 'cyan' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)}> Toggle</button>
          <button onClick={() => props.handleRemove(props.item)}> Remove</button>
          <button onClick={() => props.handlePriority(props.item)}>{props.item.priority}</button>
      </li>
   )
}

const List = (props) => {
   return (
       <ul>
           {props.list.map(item => <Item item={item} 
                                         key={item.id} 
                                         handleToggle={props.handleToggle} 
                                         handleRemove={props.handleRemove}
                                         handlePriority={props.handlePriority}
                                  />)}
       </ul>
   )
}

class Form extends React.Component{
    state = {
        inputValue: ''
    }
    handleChange = (e) => {
        this.setState({inputValue: e.target.value});
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const value = this.state.inputValue;
       this.setState({inputValue: ''});
       this.props.handleSubmit(value);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} />
            </form>
        )
    }
}
class ProjectSort extends React.Component{
    state = {
        list: [],
        sorted: null
    }

    handleSubmit = (value) => {
      const item = {
          id: `${Math.random() - Math.random()}`,
          value,
          completed: false,
          priority: 0
      }
      const newList = [...this.state.list, item]
      this.setState({list: newList});
      localStorage.setItem('list', JSON.stringify(newList));
    }
    handleToggle = (el) => {
      const newList = this.state.list.map(item => {
          if(item.id === el.id) {
             item.completed = !item.completed
          }
          return item;
      })
      this.setState({list: newList})
      localStorage.setItem('list', JSON.stringify(newList));
    }
    handleRemove = (el) => {
       const newItem = this.state.list.filter(item => item.id !== el.id);
       this.setState({list: newItem});
       localStorage.setItem('list', JSON.stringify(newItem))
    }
    handlePriority = (el) => {
       const newList = this.state.list.map(item => {
           if(item.id === el.id) {
             item.priority = item.priority + 1;
           }
           return item;
       });
       this.setState({list: newList})
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
      const newList = this.state.list.sort((a, b) => {
        if(this.state.sorted === true) {
            return a.priority - b.priority;
        }else if(this.state.sorted === false) {
            return b.priority - a.priority;
        }
    })
     this.setState({list: newList})
    }
    componentDidMount() {
        const newList = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list: newList})
    }
    render(){
        return(
            <>
              <Form handleSubmit={this.handleSubmit} />
              <List list={this.state.list} 
                    handlePriority={this.handlePriority}
                    handleToggle={this.handleToggle} 
                    handleRemove={this.handleRemove}
              />
              <button onClick={this.handleSort}>sort</button>
            </>
        )
    }
}

export default ProjectSort