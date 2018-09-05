import React, { Component } from 'react';
import RecipeSmall from '../_components/RecipeSmall'

//Style

import {
  RandomContainerWrapper, Box, Button, RandomWrapper
} from './styles/HomeStyle.js';


export default class Home extends Component {

  render(){
    return(
      <RandomContainerWrapper>
        <Box>
          <h1>
            {
              (this.props.recipe)?
                "Want a random recipe? Here's one below!"
                :
                "No random recipe"
            }
          </h1>
        </Box>
        {
          (this.props.recipe)?
          <RandomWrapper>
            <RecipeSmall recipe={this.props.recipe} />
            <Button onClick={this.props.newRecipe}>Get another random recipe</Button>
          </RandomWrapper>
          :""
        }
      </RandomContainerWrapper>
      )
  }
}
