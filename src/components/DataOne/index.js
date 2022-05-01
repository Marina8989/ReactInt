import React from 'react';
import axios from 'axios';

class DataOne extends React.Component{
    state = {
        users: [],
        searchInput: '',
        isLoading: false,
        hasError: false
    }
    getUser = async (user) => {
        this.setState({isLoading: true});
        try{
            const {data} = await axios(`https://api.github.com/users/${user}`);
            const newUser = [...this.state.users, data];
            this.setState({users: newUser, isLoading: false, hasError: false});
        }catch(err){
           this.setState({hasError: true, isLoading: false});
        }
    }
    handleChange = (e) => {
      this.setState({searchInput: e.target.value});
    }
    handleSubmit = (e) => {
       e.preventDefault();
       this.getUser(this.state.searchInput);
       this.setState({searchInput: ''});
    }
    render() {
        console.log(this.state.users)
        return (
            <>
              <form onSubmit={this.handleSubmit}>
                  <input value={this.state.searchInput} onChange={this.handleChange} />
              </form>
              {this.state.hasError && <h3>There was an error...</h3>}
              {this.state.isLoading ? <h4>Loading...</h4> : (this.state.users.map(user => {
                  return (
                    <div key={user.id}>
                        <h4>{user.login}</h4>
                        <h4>Name: {user.name}</h4>
                    </div>
                  )
              }))
             }
            </>
        )
    }
}
export default DataOne