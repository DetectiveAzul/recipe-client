import React, { Component } from 'react';
import RecipeSmall from '../_components/RecipeSmall.js';
//Style
import { RecipeListWrapper } from './styles/RecipesContainerStyle.js';
import { Box } from './styles/EndPointsStyle.js';

export default class RecipesContainer extends Component {

  render(){
    if(this.props.recipes === [] || !this.props.recipes ){
      return (
        <Box><h1>No recipes in database</h1></Box>
      )
    }
    return(
      <RecipeListWrapper>
      {this.props.recipes.map((recipe, index) => {
            return(<RecipeSmall
              key={index}
              recipe={recipe}
              />)
        })
      }
    </RecipeListWrapper>
    )
  }
}
