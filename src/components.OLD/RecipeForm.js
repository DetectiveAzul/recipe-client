import React from 'react';

const RecipeForm = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.submit({
      name: event.target.name.value,
      description: event.target.description.value
    });
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
  );
}

export default RecipeForm;
