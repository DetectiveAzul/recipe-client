import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { addRecipe } from '../redux/actions/index.js';
import RecipeForm from '../_components/RecipeNew/RecipeForm.js';

let AddRecipe = ({ dispatch }) => {

  const addNewRecipe = (recipe) => {
    dispatch(addRecipe(recipe));
    navigate('/recipes')
  };

  return(
    <RecipeForm addRecipe={addNewRecipe} />
  )

};

AddRecipe = connect()(AddRecipe);

export default AddRecipe;
