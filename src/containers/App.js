import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Sticky from '../components/Sticky';
import ErrorBoundry from '../components/ErrorBoundry';

import { setSearchField, requestRobots } from '../redux/actions';

// const usersUrl = 'https://jsonplaceholder.typicode.com/users';

class App extends Component {
  componentDidMount() {
    this.props.handleReauestRobots();
  }

  render() {
    const { searchField, handleSearchChange, robots, isPending } = this.props;

    const filteredRobots = robots.filter((robot) =>
      robot.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return isPending ? (
      <h1 className='tc f1'>'Loading...' </h1>
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
  searchField: state.searchRobots.searchField,
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchChange: ({ target: { value } }) =>
    dispatch(setSearchField(value)),
  handleReauestRobots: () => requestRobots(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
