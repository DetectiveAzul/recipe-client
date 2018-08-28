import React from 'react';
import { connect } from 'react-redux';
import { addRecipe } from '../_redux/actions/index.js';

let AddRecipe = ({ dispatch }) => {

  const handleClick = (event) => {
    event.preventDefault();
    dispatch(addRecipe(
      {
        name: event.target.name.value,
        description: event.target.description.value
      }
    ));
  };

  return(
    <form onSubmit={handleClick}>
    <input
      required
      type='text'
      name='name'
      placeholder='Input Recipe Name'
    />
    <input
      required
      type='text'
      name='description'
      placeholder='Input Recipe Description'
    />
    <input
      type='submit'
      value='Add'
    />
  </form>
  )


};

AddRecipe = connect()(AddRecipe);

export default AddRecipe;
