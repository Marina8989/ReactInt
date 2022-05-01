import React from 'react';
import axios from 'axios';

class DataOne extends React.Component{
    state = {
        user: [],
        searchInput: '',
        isLoading: false,
        hasError: false
    }
    handleChange = (e) => {
      this.setState({searchInput: e.target.value});
    }
    handleSubmit = (e) => {
       e.preventDefault();
       this.setState({searchInput: ''})
    }
    render() {
        console.log(this.state.searchInput)
        return (
            <>
              <form onSubmit={this.handleSubmit}>
                  <input value={this.state.searchInput} onChange={this.handleChange} />
              </form>
            </>
        )
    }
}
export default DataOne