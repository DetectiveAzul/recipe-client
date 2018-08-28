import React from 'react';
import PropTypes from 'prop-types';
import RecipeSmall from './RecipeSmall.js';

const mapRecipes = (recipes) => {
  return recipes.map((recipe, index) => {
    return(
      <RecipeSmall
        key={index}
        recipe={recipe}
      />
    );
  });
};

const RecipeSmallList = ({ recipes }) => {
  return(
    <div className='index'>
    { mapRecipes(recipes) }
    </div>
  );
};

RecipeSmallList.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.object.isRequired
  ).isRequired
};

export default RecipeSmallList
