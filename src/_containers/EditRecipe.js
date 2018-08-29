import React from 'react';
// import { navigate } from '@reach/router';
import { connect } from 'react-redux';
// import { updateRecipe } from '../redux/actions/index.js';
import RecipeForm from '../_components/RecipeEdit/RecipeForm.js';

let EditRecipe = ({ dispatch }) => {

  const editRecipe = (newbody, id) => {
    //This will dispatch the action to redux
  }

  return(
    <RecipeForm
      editRecipe = {editRecipe}
    />
  )

};

EditRecipe = connect()(EditRecipe);

export default EditRecipe;
