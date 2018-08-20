import React, { Component } from 'react';
import { Router } from '@reach/router';
// import { navigate } from '@reach/router';
import ApiHelper from './helpers/ApiHelper.js';

//Components
import NavBar from './components/NavBar.js';
import IngredientsList from './containers/IngredientsList.js';
import RecipesList from './containers/RecipesList.js';

class App extends Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="App">
        <NavBar />
        <Router>
          <RecipesList
            path="recipes"
          />
          <IngredientsList
            path="ingredients"
          />
        </Router>
      </div>
    );
  }
}

export default App;
