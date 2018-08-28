import React, { Component } from 'react';
import fetch from 'cross-fetch';
import config from '../_helpers/config.js';
//Components
import RecipeInfo from '../_components/RecipeView/RecipeInfo.js'
import RecipeIngredients from '../_components/RecipeView/RecipeIngredients.js'
import RecipeSteps from '../_components/RecipeView/RecipeSteps.js'

class IndividualRecipe extends Component {
  constructor() {
    super();
    this.state = {
      recipe: undefined
    };
  };

  componentDidMount() {
    return fetch(`${config.apiUrl}recipes/1`)
      .then(response => response.json())
      .then(json => this.setState({
        recipe: json.data
        })
      );
  };

  render() {
    return(
      <div className='recipeView'>
        <RecipeInfo info={this.state.recipe.info} />
        <RecipeIngredients
          ingredients={this.state.recipe.ingredients}
          quantities={this.state.recipe.quantities}
          measurements={this.state.recipe.measurements}
         />
        <RecipeSteps steps={this.state.recipe.steps} />
      </div>
    );
  }
};

export default IndividualRecipe;
