import React from 'react';

const Recipe = (props) => {

  const handleClick = (event) => {
    props.onClick(props.id);
  }

  return(
    <div className='recipe'>
      <div className='recipe-info'>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Recipe;
