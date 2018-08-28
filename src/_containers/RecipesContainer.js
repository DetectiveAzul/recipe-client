import React, { Component } from 'react';
import { Router } from '@reach/router';
import RecipeSmall from '../_components/RecipeSmall.js';

export default class RecipesContainer extends Component {
  render(){
    return(
      <div className='recipe-list'>
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
