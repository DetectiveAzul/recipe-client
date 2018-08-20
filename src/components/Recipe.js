import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;


const Recipe = (props) => {
  return(
    <Wrapper className='recipe'>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </Wrapper>
  );
};

export default Recipe;
