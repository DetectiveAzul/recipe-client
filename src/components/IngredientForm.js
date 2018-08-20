import React from 'react';

const IngredientForm = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    const name = prettifyData(event.target.name.value)
    props.submit({
      name: name
    })
  }

  function prettifyData(data) {
    return data.replace(/\b\w/g, l => l.toUpperCase()).trim()
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
