import React, { Component, Fragment } from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/home/';
import About from './pages/about/';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router history={createBrowserHistory({ basename: process.env.PUBLIC_URL })}>
        <Fragment className="route">
          {/* <Header /> */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Fragment>
      </Router>
      // <div className="App">
      // </div>
    );
  }
}

export default App;
