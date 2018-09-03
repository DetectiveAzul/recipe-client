import styled from 'styled-components';

export const RecipeWrapper = styled.div `
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 275px;
  margin: 15px;
  background-color: rgb(255,250,250, 0.75);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);

  &:hover {
    background-color: rgb(255,250,250, 1);
  }
`

export const TitleWrapper = styled.div `
  text-align: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
  padding-top: 15px;
  flex: 0.75;
`

export const DescriptionWrapper = styled.div `
  text-align: center;
  font-style: italic;
  font-size: 15px;
  margin: 10px;
  flex: 3;
  overflow: scroll;
`

export const TimeWrapper = styled.div `
  flex: 0.75;
  padding-left: 15px;
`

export const Button = styled.button`
  background: ${props => props.primary ? 'palevioletred' : 'white'};
  color: ${props => props.primary ? 'white' : 'palevioletred'};
  flex: 1;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  cursor: pointer;
`;

export const Box = styled.div`
  background-color: rgb(255,250,250, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
  margin: 15px;
  padding: 20px;
  flex: 1;
`;
