import React from 'react';
import {RecipeWrapper, InfoWrapper} from './styles/ComponentStyle.js';
import { navigate } from '@reach/router';
import {prettyTime} from '../_helpers/prettify'


const RecipeSmall = ({ recipe, deleteRecipe }) => {
  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  }
  return(
    <RecipeWrapper>
      <InfoWrapper onClick={handleClick} >
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <p>Prep time: {prettyTime(recipe.preptime)}</p>
        <p>Cook time: {prettyTime(recipe.cooktime)}</p>
      </InfoWrapper>
    </RecipeWrapper>
  );
};

export default RecipeSmall;
