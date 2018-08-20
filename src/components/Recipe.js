import React from 'react';

const Recipe = (props) => {
  return(
    <div className='recipe'>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Recipe;
