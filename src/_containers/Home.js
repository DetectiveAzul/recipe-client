import React, { Component } from 'react';
import RecipeSmall from '../_components/RecipeSmall'
import { Button } from './styles/HomeStyle'

//Style
import {
  Box
} from './styles/EndPointsStyle.js';

export default class Home extends Component {

  render(){
    if(this.props.recipe === [] || !this.props.recipe){
      return(
        <Box><h1> No random recipe</h1></Box>
      )
    }
    return (
        <div>
          <Box> <h1> Want a random recipe? Here's one below! </h1> </Box>
          <RecipeSmall recipe={this.props.recipe} />
          <Button onClick={this.props.newRecipe}>Get another random recipe</Button>
        </div>
      )
  }
}
