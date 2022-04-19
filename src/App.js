import React, {useState, useEffect} from 'react';
import axios from 'axios';

//const api_base = 'https://api.coingecko.com/api/v3/coins/list'

const App = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('');

  const getCoins = async () => {
     const response = await axios('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true');
     console.log(response);
     setList(response.data);
  }
  
  const handleChange = (e) => {
     setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch('');
  }
  useEffect(() => {
    getCoins();
  }, [])
  
  return (
     <>
      <form onSubmit={handleSubmit}>
        <input value={search} onChange={handleChange} /> 
      </form>
      <ul>
        {list.map(item => <li key={item.id}>{item.name}</li>)}
      </ul>
     </>
  )
}

export default App