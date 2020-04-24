import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/home';
import Header from './components/header-nav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createBrowserHistory({ basename: process.env.PUBLIC_URL })}>
          <div className="route">
            <Header />
            <Route exact path="/" component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
