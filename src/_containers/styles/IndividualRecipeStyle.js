import styled from 'styled-components';

export const RecipeViewWrapper = styled.div `
  display: flex;
`
export const IngredientRow = styled.div `
  display: flex;
`

export const LeftPart = styled.div `
  flex: 1;
`

export const RightPart = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const Button = styled.button`
  color: ${props => props.primary ? 'red' : 'green'};
  flex: 1;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  cursor: pointer;
`;
