import styled from 'styled-components';

export const BodyWrapper = styled.div`
  height: 100%;
`
export const RecipeViewWrapper = styled.div `
  display: flex;
`
export const IngredientRow = styled.div `
  display: flex;
`

export const LeftPart = styled.div `
  flex: 1;
  max-height: 150px;
`

export const RightPart = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
`
export const StepsPart = styled.div `
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 500px;
  max-height: 55vh;
  overflow: scroll;
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

export const Box = styled.div`
  background-color: rgb(255,250,250, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
  margin: 15px;
  padding: 20px;
  flex: 1;
`
