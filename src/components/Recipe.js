import React from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';


const RecipeWrapper = styled.div `
  display: flex;
`
const InfoWrapper = styled.div`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  flex: 3;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  flex: 1;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Recipe = (props) => {

  const handleClick = (event) => {
    props.delete(props.id);
  }

  return(
    <RecipeWrapper>
      <InfoWrapper onClick={() => { navigate(`recipes/${props.id}`) }}>
        <h3>{props.recipeData.name}</h3>
        <p>{props.recipeData.description}</p>
      </InfoWrapper>
      <Button onClick={handleClick}>Delete</Button>
    </RecipeWrapper>
  );
};

export default Recipe;
