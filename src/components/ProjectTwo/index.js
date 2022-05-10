import React from 'react';
import './index.css';


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
       this.props.handleSubmit(value)
    }
    render() {
        return (
            <>
             <form onSubmit={this.handleSubmit}>
                 <input value={this.state.inputValue} onChange={this.handleChange} />
             </form>
            </>
        )
    }
}

const Item = (props) => {
   return (
       <li className={props.item.completed ? 'cyan' : ''}>
           {props.item.value}
           <button onClick={() => props.handleToggle(props.item)}>Toggle</button>
           <button onClick={() => props.handleRemove(props.item)}>Remove</button>
       </li>
   )
}

const List = (props) => {
    return (
        <ul>
            {props.list.map(item => <Item key={item.id} item={item} handleRemove={props.handleRemove} handleToggle={props.handleToggle}/>)}
        </ul>
    )
}

class ProjectTwo extends React.Component{
    state = {
        list: []
    }
    handleSubmit = (value) => {
       const item = {
           id: `${Math.random() - Math.random()}`,
           value,
           completed: false
       }
       const newItem = [...this.state.list, item];
       this.setState({list: newItem})
    }
    handleToggle = (el) => {
       const newItem = this.state.list.map(item => {
           if(item.id === el.id) {
               item.completed = !item.completed;
           }
           return item;
       })
       this.setState({list: newItem})
    }
    handleRemove = (el) => {
      const newItem = this.state.list.filter(item => item.id !== el.id);
      this.setState({list: newItem})
    }
    render(){
        console.log(this.state.list)
        return(
            <>
              <Form handleSubmit={this.handleSubmit} />
              <List list={this.state.list} handleToggle={this.handleToggle} handleRemove={this.handleRemove}/>
            </>
        )
    }
}

export default ProjectTwo;