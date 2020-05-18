import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import MainPage from './containers/Assessment/MainPage';
import Header from './components/Header/Header';
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Route path="/" component={MainPage} />
      </div>
    );
  }
}

export default App;
