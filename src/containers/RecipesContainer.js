import React, { Component } from 'react';

export default class RecipesContainer extends Component {
  render(){
    return(
      <ul>
        {this.props.recipes.map((recipe, index) => <li key={index}>{recipe.name}</li>)}
      </ul>
    )
  }
}
