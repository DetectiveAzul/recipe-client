import React from 'react';
import styled from 'styled-components';

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
    props.onClick(props.id);
  }

  return(
    <RecipeWrapper>
      <InfoWrapper>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </InfoWrapper>
      <Button onClick={handleClick}>Delete</Button>
    </RecipeWrapper>
  );
};

export default Recipe;
