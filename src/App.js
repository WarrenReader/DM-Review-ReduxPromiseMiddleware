import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import {getPeople} from './ducks/people';

class App extends Component {

  render() {

    const people = this.props.people.map((person, i) => (
      <div className="person"key={i}>
      <img src={person.picture.medium} />
      <h3>{`${person.name.first} ${person.name.last}`}</h3>
      </div>
    ))

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Redux Promise Middleware</h2>
        </div>

        <button onClick={this.props.getPeople}>Get People</button>
        <div>
          {this.props.loading ? 'fetching people...' : people}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    people: state.people.people,
    loading: state.people.loading
  }
}

export default connect(mapStateToProps, {getPeople})(App);
