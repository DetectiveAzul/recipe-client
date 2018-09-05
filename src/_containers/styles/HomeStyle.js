import styled from 'styled-components'

export const RandomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 280px;
`
export const Button = styled.button`
  color: ${props => props.primary ? 'red' : 'green'};
  flex: 0.05;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  cursor: pointer;
  width: 250px;
`

export const Box = styled.div`
  background-color: rgb(255,250,250, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
  flex: 1;
  padding-left: 30px;
  padding-right: 30px;
  padding: 5px;
  margin-bottom: 10px;
  text-align: center;
  width: 100%;
`
export const RandomContainerWrapper = styled.div `
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  min-width: 600px;
  max-width: 100%;
  margin: 15px;
  margin-left: 20px;
  padding: 5px;
  align-items: center;
`
