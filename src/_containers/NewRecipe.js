import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { addRecipe } from '../redux/actions/index.js';
import RecipeForm from '../_components/RecipeNew/RecipeForm.js';

let AddRecipe = ({ dispatch }) => {

  const addRecipe = (recipe) => {
    // dispatch(addRecipe(
    //   {
    //     name: event.target.name.value,
    //     description: event.target.description.value
    //   }
    // ));
    console.log('Added Recipe!', recipe)
    // navigate()
  };

  return(
    <RecipeForm addRecipe={addRecipe} />
  )

};

AddRecipe = connect()(AddRecipe);

export default AddRecipe;
