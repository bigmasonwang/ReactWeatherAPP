import React, { useState} from 'react';
import './css/SideBar.scss';

const SideBar = (props) => {
  const [searchText, setSearchText] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  return (
    <div className='side_bar'>
      <form>
        <input
          type='text'
          className='side_bar_input'
          name='text'
          placeholder='Search Location'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!searchHistory.includes(searchText) && searchText) {
              setSearchHistory([searchText, ...searchHistory]);
              props.handleCityChange(searchText);
            }
            setSearchText('');
          }}
        >
          Search
        </button>
      </form>
      <div className='side_bar_history'>
        {searchHistory &&
          searchHistory.map((history) => (
            <div className='history' key={history}>
              <h3>{history}</h3>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
