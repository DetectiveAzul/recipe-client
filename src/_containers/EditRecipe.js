import React from 'react';
// import { navigate } from '@reach/router';
import { connect } from 'react-redux';
// import { updateRecipe } from '../redux/actions/index.js';
import RecipeForm from '../_components/RecipeEdit/RecipeForm.js';
import ApiHelper from '../_helpers/ApiHelper.js'

let EditRecipe = ({ dispatch }) => {

  const getRecipe = () => {

  }

  const editRecipe = (newbody, id) => {


  }

  return(
    <RecipeForm
      recipe = {getRecipe()}
      editRecipe = {editRecipe}
    />
  )

};

EditRecipe = connect()(EditRecipe);

export default EditRecipe;
