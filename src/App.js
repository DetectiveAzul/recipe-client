import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
// import { navigate } from '@reach/router';
// import Request from './helpers/ApiHelper.js';
//Components
import NavBar from './components/NavBar.js';

class App extends Component {
  render() {
    // const request = new Request('recipes');
    // request.delete(1)
    //   .then(res => console.log(res));

    return (
      <div className="App">
        <NavBar />
        <Router>
        </Router>
      </div>
    );
  }
}

export default App;
