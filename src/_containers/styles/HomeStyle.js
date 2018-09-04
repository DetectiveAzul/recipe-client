import styled from 'styled-components'

export const Button = styled.button`
  color: ${props => props.primary ? 'red' : 'green'};
  flex: 0.05;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  cursor: pointer;
`;
