import React, { Component } from 'react';
import { Router } from '@reach/router';

//Components
import NavBar from './components.OLD/NavBar.js';
import IngredientsList from './containers.OLD/IngredientsList.js';
import RecipesContainer from './containers.OLD/RecipesContainer.js';

class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Router>
          <RecipesContainer
            path="recipes/*"
          />
          {/* <IngredientsList
            path="ingredients"
          /> */}
        </Router>
      </div>
    );
  }
}

export default App;
