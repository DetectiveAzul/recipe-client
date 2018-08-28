import React, { Component } from 'react';
import { Router } from '@reach/router';

//Containers
import RecipeSmallListContainer from './_containers/RecipeSmallListContainer.js';
import AddRecipe from './_containers/AddRecipe.js';

//Helpers
import ApiHelper from './_helpers/ApiHelper.js';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AddRecipe />
        <Router>
          <RecipeSmallListContainer
            path='/recipes/'
          />
        </Router>
      </div>
    );
  }
}

export default App;
