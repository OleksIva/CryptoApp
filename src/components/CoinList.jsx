import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Coin from './Coin';

function CoinList() {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');
    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const handleClearClick = () => {
        setSearch('');
    };

    useEffect(() => {
        axios
            .get(
                // 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
            )
            .then(res => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    const handleChange = e => {
        setSearch(e.target.value);
    };

    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='coin-app'>
            <div className='wrapper'><div className='coin-search'>
                {/* <p className='coin-text'>Search a currency</p> */}

                {/*SECOND TYPE OF SEARCH BAR */}
                {/* <form>
                    <input
                        className='coin-input'
                        type='text'
                        onChange={handleChange}
                        placeholder='Search'
                    />
                </form> */}
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
                <form className='search-bar' action="">
                    <input
                        type="search"
                        value={search}
                        onChange={handleChange}
                        required
                    />
                    <i className="fa fa-search"></i>
                    <a href="javascript:void(0)" id="clear-btn" onClick={handleClearClick}>
                        Clear
                    </a>
                </form>



            </div>
                {filteredCoins.map(coin => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            price={coin.current_price}
                            symbol={coin.symbol}
                            marketcap={coin.total_volume}
                            volume={coin.market_cap}
                            image={coin.image}
                            priceChange={coin.price_change_percentage_24h}
                        />
                    );
                })}</div>
        </div>
    );
}

export default CoinList;