import React from 'react';
import styled from 'styled-components';

const IngredientWrapper = styled.div`
  display: flex;
`

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  flex: 1;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Ingredient = (props) => {

  const handleClick = (event) => {
    props.onClick(props.id);
  }
    return(
    <IngredientWrapper>
      <li>{props.name}</li>
      <Button onClick={handleClick}>Delete</Button>
    </IngredientWrapper>
  )
};


export default Ingredient;
