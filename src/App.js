import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import routes from './routes';
import Nav from './components/Nav/Nav';
import './App.css';

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        { routes }
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
