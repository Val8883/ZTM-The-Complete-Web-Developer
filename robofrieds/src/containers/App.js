import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import { robots } from '../data/robots';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchFiled: '',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch(usersUrl)
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }))
      .catch((error) => {
        console.log(error);
        this.setState({ robots });
      });
  }

  handleSearchChange({ target: { value } }) {
    this.setState({ searchFiled: value });
  }

  render() {
    const { robots, searchFiled } = this.state;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return !robots.length ? (
      <h1 className='tc f1'>Loading...</h1>
    ) : (
      <div className='tc'>
        <Sticky>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox handleSearchChange={this.handleSearchChange} />
        </Sticky>

        <CardList robots={filteredRobots} />
      </div>
    );
  }
}
