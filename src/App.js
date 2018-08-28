import React, { Component } from 'react';
import { Router } from '@reach/router';

//Containers
import RecipeSmallListContainer from './_containers/RecipeSmallListContainer.js';

//Helpers
import ApiHelper from './_helpers/ApiHelper.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <RecipeSmallListContainer
            path='/recipes/'
            recipes={{id: 1, name: 'Lasagna', description: 'ñam ñam'}}
          />
        </Router>
      </div>
    );
  }
}

export default App;
