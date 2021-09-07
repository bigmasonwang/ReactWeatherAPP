import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/SideBar.scss';

const SideBar = (props) => {
  const [input, setInput] = useState('');
  const [locations, setLocations] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const result = await axios.get(
        `http://localhost:3001/api/location/?input=${input}`
      );
      setLocations(result.data);
    }
    fetchLocations();
  }, [input]);

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    const location = locations[0];
    // set search history
    if (
      searchHistory.filter((history) => history.place_id === location.place_id)
        .length === 0
    ) {
      setSearchHistory([location, ...searchHistory]);
    }
    // pass location to props
    props.handleLocationChange(location);
    setInput('');
  };

  const handleLocationClick = (e) => {
    const place_id = e.target.getAttribute('place_id');
    // get clicked location object
    const clickedLocation = locations.filter(
      (location) => location.place_id === place_id
    )[0];
    if (
      searchHistory.filter(
        (history) => history.place_id === clickedLocation.place_id
      ).length === 0
    ) {
      setSearchHistory([clickedLocation, ...searchHistory]);
    }
    props.handleLocationChange(clickedLocation);
    // setInput(clickedLocation.locationName);
    setInput('');
  };

  const handleHistoryClick = (e) => {
    const place_id = e.target.getAttribute('place_id');
    // pass location to props
    const location = searchHistory.filter(
      (history) => history.place_id === place_id
    )[0];
    props.handleLocationChange(location);
  };

  return (
    <div className='side_bar'>
      <form>
        <input
          type='text'
          className='side_bar_input'
          name='text'
          placeholder='Search Location'
          autoComplete='off'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSearchButtonClick}>Search</button>
      </form>
      <div className='side_bar_locations'>
        {locations &&
          locations.map((location) => (
            <div
              className='location'
              key={location.place_id}
              place_id={location.place_id}
              onClick={handleLocationClick}
            >
              <h4 place_id={location.place_id}>{location.locationName}</h4>
              <p place_id={location.place_id}>{location.region}</p>
            </div>
          ))}
      </div>
      <div className='side_bar_history'>
        {searchHistory &&
          searchHistory.map((history) => (
            <div
              className='history'
              key={history.place_id}
              place_id={history.place_id}
              onClick={handleHistoryClick}
            >
              <h3 place_id={history.place_id}>{history.locationName}</h3>
              <p place_id={history.place_id}>{history.region}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
