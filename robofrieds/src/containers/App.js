import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import ErrorBoundry from '../components/ErrorBoundry';
import { robots } from '../data/robots';

import { setSearchField } from '../redux/actions';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: '',
    };
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

  render() {
    const { robots } = this.state;
    const { searchField, handleSearchChange } = this.props;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return !robots.length ? (
      <h1 className='tc f1'>Loading...</h1>
    ) : (
      <div className='tc'>
        <Sticky>
          <h1 className='f1'>Robofriends</h1>
          <SearchBox handleSearchChange={handleSearchChange} />
        </Sticky>

        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searchField: state.searchField,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: ({ target: { value } }) =>
    dispatch(setSearchField(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
