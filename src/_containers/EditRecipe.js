import React from 'react';
import { navigate } from '@reach/router';
import { connect } from 'react-redux';
import { updateRecipe } from '../redux/actions/index.js';
import RecipeForm from '../_components/RecipeEdit/RecipeForm.js';

let EditRecipe = (props) => {

  const editRecipe = (newBody, id) => {
    props.dispatch(updateRecipe(newBody, id));
    //This will dispatch the action to redux
  }

  return(
    <RecipeForm
      editRecipe = {editRecipe}
      id = {props.id}
    />
  )

};

EditRecipe = connect()(EditRecipe);

export default EditRecipe;
