import React from 'react';
import PropTypes from 'prop-types';
import {RecipeWrapper, InfoWrapper, Button } from './styles/ComponentStyle.js';

const RecipeSmall = ({ recipe }) => {
  return(
    <RecipeWrapper>
      <InfoWrapper onClick={() => { navigate(`${props.recipeData.id}`)} } >
        <h3>{props.recipe.name}</h3>
        <p>{props.recipe.description}</p>
      </InfoWrapper>
      <Button>Delete</Button>
    </RecipeWrapper>
  );
};

Todo.propTypes = {
  recipe: PropTypes.object.isRequired
}
