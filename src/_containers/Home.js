import React, { Component } from 'react';
import RecipeSmall from '../_components/RecipeSmall'

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
          <Box> <h1> This is the home page </h1> </Box>
          <Box><h3>Random recipe</h3></Box>
          <RecipeSmall recipe={this.props.recipe} />
        </div>
      )
  }
}
