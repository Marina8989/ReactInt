import React from 'react';
import './index.css';

const Item = (props) => {
   return (
       <>
         <li className= {props.item.completed ? 'cyan' : ''}>
             {props.item.value}
             <button onClick={() => props.handleToggle(props.item)}>toggle</button>
             <button onClick={() => props.handleRemove(props.item)}>remove</button>
         </li>
       </>
   )
}

const List = (props) => {
   return (
       <ul>
           {props.list.map(item => <Item 
                                      item={item} 
                                      key={item.id} 
                                      handleToggle={props.handleToggle}
                                      handleRemove={props.handleRemove}
                                   />)}
       </ul>
   )
}

const SearchInput = (props) => {
        return(
            <>
              <input value={props.searchValue} onChange={props.handleSearch} />
            </>
        )
    }

class Form extends React.Component{
    state = {
        searchInput: ""
    }
    handleChange = (e) => {
       this.setState({searchInput: e.target.value})
    }
    handleSubmit = (e) => {
       e.preventDefault();
       const value = this.state.searchInput;
       this.setState({searchInput: ''});
       this.props.handleSubmit(value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.value} onChange={this.handleChange} />
            </form>
        )
    }
}

class Search extends React.Component{
    state={
        list: [],
        searchValue: ''
    }
    handleSubmit = (value) => {
        const item = {
            id: `${Math.random() - Math.random()}`,
            value,
            completed: false
        }
        const newList = [...this.state.list, item];
        this.setState({list: newList})
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
      const newList = this.state.list.filter(item => item.id !== el.id);
      this.setState({list: newList});
    }
    handleSearch = (e) => {
      this.setState({searchValue: e.target.value})
    }
    render(){
        const newList = this.state.list.filter(item => item.value.includes(this.state.searchValue))
        return(
            <>
               <Form handleSubmit={this.handleSubmit} />
               <SearchInput handleSearch={this.handleSearch} />
               <List 
                  list={newList}
                  handleToggle={this.handleToggle}
                  handleRemove={this.handleRemove}
               />
            </>
        )
    }
}
export default Search