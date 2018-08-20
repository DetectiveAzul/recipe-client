import React from 'react';

const IngredientForm = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.submit({
      name: event.target.name.value
    })
  }

  return(
    <form onSubmit={handleClick}>
      <input
        required
        type='text'
        name='name'
        placeholder='Add ingredient'
      />
      <input
        type='submit'
        value='Add'
      />
    </form>
  )
}

export default IngredientForm;
