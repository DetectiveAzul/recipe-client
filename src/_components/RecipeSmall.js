import React from 'react';
import PropTypes from 'prop-types';
import {RecipeWrapper, InfoWrapper, Button } from './styles/ComponentStyle.js';

const RecipeSmall = ({ recipe }) => {
  return(
    <RecipeWrapper>
      <InfoWrapper onClick={() => { navigate(`${recipe.id}`)} } >
        <h3>{recipe.name}</h3>
        <p>{recipe.description}</p>
      </InfoWrapper>
      <Button>Delete</Button>
    </RecipeWrapper>
  );
};

Todo.propTypes = {
  recipe: PropTypes.object.isRequired
}
