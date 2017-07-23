import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Index from './containers/Index.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path='/' component={Index} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
