import React from "react";
import "./index.css";

class Item extends React.Component{
  state = {
    updatedValue: this.props.item.value,
    visible: false
  }
  handleUpdate = () => {
    this.setState({visible: true})
  }
  render(){
    return (
      <li className={this.props.item.completed ? 'cyan' : ''}>
        {this.state.visible ? <input value={this.state.updatedValue}/> : (
          <h6 onClick={() => this.handleUpdate()}>{this.props.item.value}</h6>
        )}
        <button onClick={(e) => this.props.handleToggle(this.props.item)}>toggle</button>
           <button onClick={(e) =>this.props.handleRemove(this.props.item)}>remove</button>
      </li>
    )
  }
}
const List = (props) => {
  return (
    <ul>
     {props.list.map(item => <Item key={item.id} item={item} 
             handleToggle={props.handleToggle}
             handleRemove={props.handleRemove}
             />)}
    </ul>
  )
}

class Form extends React.Component {
  state = {
     value: ''
  }
  handleChange = (e) => {
    this.setState({value: e.target.value});
 }

 handleSubmit = (e) => {
   e.preventDefault();
   const value = this.state.value;
   this.props.handleSubmit(value);
   this.setState({value: ''})
 }
 
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.value} onChange={this.handleChange} />
      </form>
    )
  }
}
class App extends React.Component{
  state = {
    list: []
  };
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
    this.setState({list: newItem});
  }
  handleRemove = (el) => {
     const newItem = this.state.list.filter(item => item.id !== el.id);
     this.setState({list: newItem})
  }

    render() {
      return (
        <>
          <Form handleSubmit={this.handleSubmit}/>
          <List list={this.state.list} 
            handleToggle={this.handleToggle} 
            handleRemove={this.handleRemove}
            />
        </>
      )
    }
}
export default App