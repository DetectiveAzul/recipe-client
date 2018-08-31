import React, { Component } from 'react';
import fetch from 'cross-fetch';
import config from '../_helpers/config.js';
//Components
import RecipeInfo from '../_components/RecipeView/RecipeInfo.js'
import RecipeIngredients from '../_components/RecipeView/RecipeIngredients.js'
import RecipeSteps from '../_components/RecipeView/RecipeSteps.js'
import { navigate } from '@reach/router';

//Styles
import {
  RecipeViewWrapper, LeftPart, RightPart, IngredientRow, Button
} from './styles/IndividualRecipeStyle.js';

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

  handleEditClicked = () => {
    navigate(`/recipes/${this.state.recipe.info.id}/edit`);
    }

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
      <div className='individual-recipe'>
        {
          (this.state.recipe) ?
          <RecipeViewWrapper>
            <LeftPart>
              <RecipeInfo info={this.state.recipe.info} />
              <IngredientRow>
                <LeftPart>
                  <RecipeIngredients
                    ingredients={this.state.recipe.ingredients}
                    quantities={this.state.recipe.quantities}
                    measurements={this.state.recipe.measurements}
                   />
                 </LeftPart>
                 <RightPart>
                   <Button onClick={this.handleEditClicked}>Edit</Button>
                   <Button onClick={this.handleDeleteClicked}>Delete</Button>
                </RightPart>
            </IngredientRow>
            </LeftPart>
            <RightPart>
              <RecipeSteps steps={this.state.recipe.steps} />
            </RightPart>
          </RecipeViewWrapper>
          : 'Recipe not found'
        }
      </div>
    );
  }
};

export default IndividualRecipe;
