import styled from 'styled-components';

export const Box = styled.div`
  background-color: rgb(255,250,250, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
  margin: 15px;
  padding: 20px;
  flex: 1;
  text-align: center;
`
export const FormWrapper = styled.form`
  height: 100%;
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
  background-color: rgb(255,250,250, 0.8);
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.5);
  margin: 15px;
  padding: 20px;
`

export const TimesField = styled.div`
  display: flex;
`

export const NameField = styled.input`
  width: 100%;
  height: 50px;
  font-size: 30px;
`
export const DescriptionArea = styled.textarea`
  resize: none;
  width: 100%;
  height: 50px;
  font-size: 15px;
`

export const StepArea = styled.textarea`
  resize: none;
  width: 90%;
  margin-left: 5px;
`

export const StepTitle = styled.div`
  display: flex;
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
`;

export const SubmitButton = styled.input`
  color: ${props => props.primary ? 'red' : 'green'};
  flex: 1;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  cursor: pointer;
`;


export const StepHeading = styled.h4`
  flex: 2;
  text-align: center;
`

export const StepFieldList = styled.div`
  overflow: scroll;
  flex: 9;
`

export const IngredientFieldList = styled.div`
  overflow: scroll;
  flex: 9;
  max-height: 120px;
`

export const ButtonDiv = styled.div`
  flex: 1;
`
export const IngredientInput = styled.input`
  margin: 1px 5px;
  width: 35%;
`
