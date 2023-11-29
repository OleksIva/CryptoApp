import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from 'react-router-dom';
import favoritesButton from '../assets/favorites.svg';
import AOS from 'aos';

import axios from 'axios';
import Coin from './Coin';

const CoinList = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(10);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  const handleClearClick = () => {
    setSearch('');
    setCurrentPage(1);
  };

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;

  const filteredCoins = coins.filter((coin) => {
    const nameIncludesSearch = coin.name.toLowerCase().includes(search.toLowerCase());
    const symbolIncludesSearch = coin.symbol.toLowerCase().includes(search.toLowerCase());

    return nameIncludesSearch || symbolIncludesSearch;
  });

  const currentCoins = showFavorites
    ? coins.filter((coin) => favorites.includes(coin.id)).slice(indexOfFirstCoin, indexOfLastCoin)
    : filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const toggleFavorite = (coinId) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(coinId)) {
        return prevFavorites.filter((id) => id !== coinId);
      } else {
        return [...prevFavorites, coinId];
      }
    });
  };

  const isFavorite = (coinId) => favorites.includes(coinId);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  

  return (
    <Router>
      <div id='coin-app' className='coin-app'>
        <div className='wrapper' data-aos="fade-up">
          <div className='coin-search'>
            <form className='search-bar' action=''>
              <input
                type='search'
                value={search}
                onChange={handleInputChange}
                required
              />
              <i className='fa fa-search'></i>
              <a
                href='javascript:void(0)'
                id='clear-btn'
                onClick={handleClearClick}
              >
                Clear
              </a>
            </form>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossOrigin="anonymous"></link>
          </div>
          {currentCoins.length > 0 ? (
            currentCoins.map((coin) => (
              <div key={coin.id} className='coin-row'>
                {/* <button
                  onClick={() => toggleFavorite(coin.id)}
                  className={
                    isFavorite(coin.id)
                      ? 'favorite-button active'
                      : 'favorite-button'
                  }
                >
                  ★
                </button> */}
                <button
  onClick={() => toggleFavorite(coin.id)}
  className={`favorite-button ${isFavorite(coin.id) ? 'active' : ''}`}
>
  <img src={favoritesButton} alt="Favorite" />
</button>
                <Coin
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketcap={coin.total_volume}
                  volume={coin.market_cap}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
          <div className='pagination'>
            {[...Array(Math.ceil(filteredCoins.length / coinsPerPage))].map(
              (item, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                >
                  {index + 1}
                </button>
              )
            )}
            <nav className='navigation'>
            <Link to='/'>All Coins</Link>
            <Link to='/favorites'>Favorites</Link>
            {/* {currentPage !== 1 && ( */}
              <button className='navigation__button' onClick={() => setShowFavorites(!showFavorites)}>
                {showFavorites ? 'Show All' : 'Show Favorites'}
              </button>
            {/* )} */}
          </nav>
          <Outlet />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default CoinList;




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Coin from './Coin';

// function CoinList() {
//     const [coins, setCoins] = useState([]);
//     const [search, setSearch] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const [coinsPerPage] = useState(10);

//     const handleInputChange = (event) => {
//         setSearch(event.target.value);
//         setCurrentPage(1);
//     };

//     const handleClearClick = () => {
//         setSearch('');
//         setCurrentPage(1);
//     };

//     useEffect(() => {
//         axios
//             .get(
//                 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en'
//             )
//             .then((res) => {
//                 setCoins(res.data);
//             })
//             .catch((error) => console.log(error));
//     }, []);

//     const handleChange = (e) => {
//         setSearch(e.target.value);
//         setCurrentPage(1);
//     };

//     const indexOfLastCoin = currentPage * coinsPerPage;
//     const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;

//     const filteredCoins = coins.filter((coin) => {
//         const nameIncludesSearch = coin.name.toLowerCase().includes(search.toLowerCase());
//         const symbolIncludesSearch = coin.symbol.toLowerCase().includes(search.toLowerCase());

//         return nameIncludesSearch || symbolIncludesSearch;
//     });

//     const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     return (
//         <div className='coin-app'>
//             <div className='wrapper'>
//                 <div className='coin-search'>
//                     <form className='search-bar' action=''>
//                         <input
//                             type='search'
//                             value={search}
//                             onChange={handleInputChange}
//                             required
//                         />
//                         <i className='fa fa-search'></i>
//                         <a
//                             href='javascript:void(0)'
//                             id='clear-btn'
//                             onClick={handleClearClick}
//                         >
//                             Clear
//                         </a>
//                     </form>
//                     <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"></link>
//                 </div>
//                 {currentCoins.map((coin) => (
//                     <Coin
//                         key={coin.id}
//                         name={coin.name}
//                         price={coin.current_price}
//                         symbol={coin.symbol}
//                         marketcap={coin.total_volume}
//                         volume={coin.market_cap}
//                         image={coin.image}
//                         priceChange={coin.price_change_percentage_24h}
//                     />
//                 ))}
//                 <div className='pagination'>
//                     {[...Array(Math.ceil(filteredCoins.length / coinsPerPage))].map(
//                         (item, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => paginate(index + 1)}
//                                 className={currentPage === index + 1 ? 'active' : ''}
//                             >
//                                 {index + 1}
//                             </button>
//                         )
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default CoinList;



