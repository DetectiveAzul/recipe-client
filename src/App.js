import React, { Component } from 'react';
import { Router } from '@reach/router';

//Components
import NavBar from './components/NavBar.js';
import IngredientsList from './containers/IngredientsList.js';
import RecipesContainer from './containers/RecipesContainer.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Router>
          <RecipesContainer
            path="recipes/*"
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
