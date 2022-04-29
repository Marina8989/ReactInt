import React from 'react';
import './index.css';

const Item = (props) => {
    return (
        <li className={props.item.completed ? 'cyan' : ''}>
            {props.item.value}
            <button onClick={() => props.handleToggle(props.item)}>toggle</button>
            <button onClick={() => props.handleRemove(props.item)}>remove</button>
        </li>
    )
}

const List = (props) => {
    return (
        <ul>
            {props.list.map(item => <Item item={item} key={item.id} handleToggle={props.handleToggle} handleRemove={props.handleRemove} />)}
        </ul>
    )

}

const SearchValue = (props) => {
   return (
       <>
         <input value={props.searchValue} onChange={props.handleSearchValue} />
       </>
   )
}

class Form extends React.Component{
    state = {
        inputValue: ''
    }
    handleChange = (e) => {
      this.setState({inputValue: e.target.value})
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const value = this.state.inputValue;
        this.setState({inputValue: ''});
        this.props.handleSubmit(value);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.inputValue} onChange={this.handleChange} />
            </form>
        )
    }
}

class Search extends React.Component{
    state = {
        list: [],
        searchValue: ''
    }
    handleSubmit = (value) => {
       const item = {
        id: `${Math.random()-Math.random()}`,    
        value,
        completed: false
       }
       const newItem = [...this.state.list, item];
       localStorage.setItem('list', JSON.stringify(newItem));
       this.setState({list: newItem});
       
    }
    handleToggle = (el) => {
      const newList = this.state.list.map(item => {
          if(item.id === el.id){
               item.completed = !item.completed
          }
          return item;
      })
      this.setState({list: newList})
    }
    handleRemove = (el) => {
       const newItem = this.state.list.filter(item => item.id !== el.id);
       this.setState({list: newItem})
    }
    handleSearchValue = (e) => {
       this.setState({searchValue: e.target.value});
    }
    componentDidMount() {
      const list = JSON.parse(localStorage.getItem('list')) || [];
      this.setState({list: list})
    }
    render(){
        const newList = this.state.list.filter(item => item.value.includes(this.state.searchValue))
        return(
            <>
              <h3>Grocery List</h3>
              <Form  handleSubmit={this.handleSubmit}/>
              <SearchValue searchValue={this.state.searchValue} handleSearchValue={this.handleSearchValue}/>
              <List list={newList} handleToggle={this.handleToggle} handleRemove={this.handleRemove} />
            </>
        )
    }
}

export default Search