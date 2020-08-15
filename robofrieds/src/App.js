import React, { useState, useCallback } from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import { robots as fetchRobots } from './data/robots';

export default function App() {
  const [robots] = useState(fetchRobots);
  const [searchedRobots, setSearchedRobots] = useState([]);

  const handleSearch = useCallback(
    (input) => {
      console.log(input);
      const searchingRobots = robots.filter((robot) =>
        robot.name.includes(input)
      );
      setSearchedRobots(searchingRobots);
    },
    [robots]
  );

  return (
    <div className='tc'>
      <h1>Robofriends</h1>
      <SearchBox handleSearch={handleSearch} />
      <CardList robots={searchedRobots} />
    </div>
  );
}
