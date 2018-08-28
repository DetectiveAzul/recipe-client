import React, { Component } from 'react';
import RecipeSmall from '../_components/RecipeSmall.js';

export default class RecipesContainer extends Component {
  render(){
    return(
      <div>
      {
          this.props.recipes.map((recipe, index) => {
            return(<RecipeSmall
              key={index}
              recipe={recipe}
            />)
        })
      }
    </div>
    )
  }
}
