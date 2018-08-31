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
<<<<<<< HEAD
    <RecipeWrapper onClick={handleClick}>
      <TitleWrapper>{recipe.name}</TitleWrapper>
      <DescriptionWrapper>{recipe.description}</DescriptionWrapper>
      <TimeWrapper> <span role="img" aria-label="clock image">⏰</span> <strong>Prep:</strong> {prettyTime(recipe.preptime)}</TimeWrapper>
      <TimeWrapper> <span role="img" aria-label="clock image">⏰</span> <strong>Cook:</strong> {prettyTime(recipe.cooktime)}</TimeWrapper>
=======
    <RecipeWrapper>
      <InfoWrapper onClick={handleClick} >
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
        <p>Prep time: {prettyTime(recipe.prep_time)}</p>
        <p>Cook time: {prettyTime(recipe.cook_time)}</p>
      </InfoWrapper>
>>>>>>> development
    </RecipeWrapper>
  );
};

export default RecipeSmall;
