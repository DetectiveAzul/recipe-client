import React, { Component } from 'react';
import RecipeSmall from '../_components/RecipeSmall.js';

export default class RecipesContainer extends Component {

  render(){
    if(!this.props.recipes){
      return (
        <h1>
        No recipes in database
        </h1>
      )
    }
    return(
      <div className='recipe-list'>
      {this.props.recipes.map((recipe, index) => {
            return(<RecipeSmall
              key={index}
              recipe={recipe}
              deleteRecipe={this.props.deleteRecipe}
              />)
        })
      }
    </div>
    )
  }
}
