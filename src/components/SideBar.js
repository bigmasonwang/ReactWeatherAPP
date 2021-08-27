import React, { useState } from 'react';
import './css/SideBar.scss';

const SideBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    if (!searchHistory.includes(searchText) && searchText) {
      setSearchHistory([searchText, ...searchHistory]);
      props.handleCityChange(searchText);
    }
    setSearchText('');
  };
  const handleHistoryClick = (e) =>{
    // console.log(e.target.innerHTML);
    props.handleCityChange(e.target.innerHTML);
  }

  return (
    <div className='side_bar'>
      <form>
        <input
          type='text'
          className='side_bar_input'
          name='text'
          placeholder='Search Location'
          autoComplete='off'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </form>
      <div className='side_bar_history'>
        {searchHistory &&
          searchHistory.map((history) => (
            <div className='history' key={history} onClick={handleHistoryClick}>
              <h3>{history}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
