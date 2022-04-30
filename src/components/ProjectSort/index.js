import React from 'react';
import './index.css';

const Item = (props) => {
   return (
      <li className={props.item.completed ? 'cyan' : ''}>
          {props.item.value}
          <button onClick={() => props.handleToggle(props.item)}> Toggle</button>
          <button onClick={() => props.handleRemove(props.item)}> Remove</button>
      </li>
   )
}

const List = (props) => {
   return (
       <ul>
           {props.list.map(item => <Item item={item} key={item.id} handleToggle={props.handleToggle} handleRemove={props.handleRemove}/>)}
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
        list: []
    }

    handleSubmit = (value) => {
      const item = {
          id: `${Math.random() - Math.random()}`,
          value,
          completed: false
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
    componentDidMount() {
        const newList = JSON.parse(localStorage.getItem('list')) || [];
        this.setState({list: newList})
    }
    render(){
        return(
            <>
              <Form handleSubmit={this.handleSubmit} />
              <List list={this.state.list} handleToggle={this.handleToggle} handleRemove={this.handleRemove}/>
            </>
        )
    }
}

export default ProjectSort