// import React from 'react'
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Coin from './Coin';
import "./Coin.css"
import "./Crypto.css"
import 'aos/dist/aos.css';


function Crypto() {
        
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => {
        setCoins(res.data);
       }).catch(error => console.log(error));
    },[]);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredCoins = coins.filter(coin =>
       coin.name.toLowerCase().includes(search.toLowerCase())
    )
  return (
    <div className='coin-app'>
      <div data-aos="fade-up"  data-aos-duration="3000">

      
        <div className='coins-search'>
            <h1 className='coin-text'>Search a currency</h1>
            <form>
            <input type="text" placeholder="search" className='coin-input' onChange={handleChange}/>
            </form>
        </div>
        {filteredCoins.map(coin => {
            return(
                < Coin 
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketcap={coin.market_cap}
                    priceChange={coin.price_change_percentage_24h}
                    volume={coin.total_volume}
                    
            
                 />
            ) 
        })};
    </div>
    </div>
  )
}

export default Crypto