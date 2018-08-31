import React from 'react';
import { navigate } from '@reach/router';
import {prettyTime} from '../_helpers/prettify'
import {
  RecipeWrapper, TitleWrapper,
  DescriptionWrapper, TimeWrapper,
  InfoWrapper
} from './styles/ComponentStyle.js';



const RecipeSmall = ({ recipe, deleteRecipe }) => {
  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  }
  return(
    <RecipeWrapper onClick={handleClick}>
      <TitleWrapper>{recipe.name}</TitleWrapper>
      <DescriptionWrapper>{recipe.description}</DescriptionWrapper>
      <TimeWrapper> ⏰ <strong>Preparation</strong>: {prettyTime(recipe.preptime)}</TimeWrapper>
      <TimeWrapper> ⏰ <strong>Cook time:</strong> {prettyTime(recipe.cooktime)}</TimeWrapper>
    </RecipeWrapper>
  );
};

export default RecipeSmall;
