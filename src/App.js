import React from "react";
import "./index.css";

class Item extends React.Component{
  state = {
    updatedValue: this.props.item.value,
    visible: false
  }
  handleUpdate = () => {
    this.setState({visible: true});
  }
  handleChange = (e) => {
    this.setState({updatedValue: e.target.value });
  }
  handleResubmit = (e) => {
    e.preventDefault();
    this.props.handleResubmit(this.props.item, this.state.updatedValue);
    this.setState({updatedValue: this.state.updatedValue, visible: false});
  }
  render(){
    
    return (
      <li className={this.props.item.completed ? 'cyan' : ''}>
        {this.state.visible ? (<form onSubmit={this.handleResubmit}>
          <input value={this.state.updatedValue} onChange={this.handleChange}/>
          </form>) : (
          <h6 onClick={this.handleUpdate}>{this.props.item.value}</h6>
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
             handleResubmit={props.handleResubmit}
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

  handleResubmit = (el, val) => {
    const newItem = this.state.list.map(item => {
      if(item.id === el.id){
         el.val = val
      }
      return item;
    })
    this.setState({list: newItem})
  }
    render() {
      return (
        <>
          <Form handleSubmit={this.handleSubmit}/>
          <List list={this.state.list} 
            handleToggle={this.handleToggle} 
            handleRemove={this.handleRemove}
            handleResubmit={this.handleResubmit}
            />
        </>
      )
    }
}
export default App