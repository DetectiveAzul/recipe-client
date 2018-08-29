//TODO: REFACTOR TO REDUX

import React, { Component } from 'react';
import fetch from 'cross-fetch';
import config from '../_helpers/config.js';
//Components
import RecipeInfo from '../_components/RecipeView/RecipeInfo.js'
import RecipeIngredients from '../_components/RecipeView/RecipeIngredients.js'
import RecipeSteps from '../_components/RecipeView/RecipeSteps.js'
import { Button } from '../_components/styles/ComponentStyle.js';
import { navigate } from '@reach/router';

class IndividualRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: undefined
    };
    this.handleDeleteClicked = this.handleDeleteClicked.bind(this)
  };

   handleDeleteClicked = (recipe) => {
    this.props.deleteRecipe(`${this.state.recipe.info.id}`);
    navigate('/recipes')
  };

  componentDidMount() {
    return fetch(`${config.apiUrl}/recipes/${this.props.id}`)
      .then(response => response.json())
      .then(json => this.setState({
        recipe: json.data
        })
      );
  };

  render() {
    return(
      <div className='recipeView'>
        {
          (this.state.recipe) ?
          <div className='recipeView'>
            <RecipeInfo info={this.state.recipe.info} />
            <RecipeIngredients
              ingredients={this.state.recipe.ingredients}
              quantities={this.state.recipe.quantities}
              measurements={this.state.recipe.measurements}
             />
            <RecipeSteps steps={this.state.recipe.steps} />
            <Button onClick={this.handleDeleteClicked}>Delete</Button>
          </div>
          : 'Loading'
        }
      </div>
    );
  }
};

export default IndividualRecipe;
