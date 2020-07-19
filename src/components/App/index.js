import React, { Component } from 'react';
import NavBar from '../navbar';
import Main from '../Main'
import './App.css';
import 'whatwg-fetch';

class App extends Component {  
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main role="main" className="flex-shrink-0">
          <div className="container">
              <Main />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
