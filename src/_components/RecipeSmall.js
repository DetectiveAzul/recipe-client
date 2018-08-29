import React from 'react';
<<<<<<< HEAD
import {RecipeWrapper, InfoWrapper} from './styles/ComponentStyle.js';
=======
import {RecipeWrapper, InfoWrapper } from './styles/ComponentStyle.js';
>>>>>>> 7a5a58510f1d3692d717f6840ad932c39ca717d9
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
