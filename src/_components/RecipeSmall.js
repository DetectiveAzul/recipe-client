import React from 'react';
import { navigate } from '@reach/router';
import {prettyTime} from '../_helpers/prettify'
import {
  RecipeWrapper, TitleWrapper,
  DescriptionWrapper, TimeWrapper
} from './styles/RecipeSmallStyle.js';



const RecipeSmall = ({ recipe, deleteRecipe }) => {
  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  }
  return(
    <RecipeWrapper onClick={handleClick}>
      <TitleWrapper>{recipe.name}</TitleWrapper>
      <DescriptionWrapper>{recipe.description}</DescriptionWrapper>
      <TimeWrapper> <span role="img" aria-label="clock image">⏰</span> <strong>Prep:</strong> {prettyTime(recipe.prep_time)}</TimeWrapper>
      <TimeWrapper> <span role="img" aria-label="clock image">⏰</span> <strong>Cook:</strong> {prettyTime(recipe.cook_time)}</TimeWrapper>
    </RecipeWrapper>
  );
};

export default RecipeSmall;
