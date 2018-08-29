import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
// import { updateRecipe } from '../redux/actions/index.js';
import RecipeForm from '../_components/RecipeNew/RecipeForm.js';

let EditRecipe = ({ dispatch }) => {

  const editRecipe = (newbody, id) => {
    // dispatch(updateRecipe(newBody, id));
    // navigate(`recipes/${id}`)
  };

  return(
    'Hello World'
    // <RecipeForm editRecipe={editRecipe} />
  )

};

EditRecipe = connect()(EditRecipe);

export default EditRecipe;
