import React from 'react';
import {RecipeWrapper, InfoWrapper} from './styles/ComponentStyle.js';
import { navigate } from '@reach/router';


const RecipeSmall = ({ recipe, deleteRecipe }) => {
  const handleClick = () => {
    navigate(`/recipes/${recipe.id}`);
  }
  return(
    <RecipeWrapper>
      <InfoWrapper onClick={handleClick} >
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </InfoWrapper>
    </RecipeWrapper>
  );
};

export default RecipeSmall;
