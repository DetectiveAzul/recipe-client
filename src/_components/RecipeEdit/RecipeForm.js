import React, {Component} from 'react';
import fetch from 'cross-fetch';
import config from '../../_helpers/config.js';
import {trimAndCapitalise} from '../../_helpers/prettify.js'
import units from '../../data/units.js'

import {
  FormWrapper, LeftPart, StepsPart, TimesField, Box,
  DescriptionArea, NameField, StepArea, TitleSection, SectionHeading,
  StepFieldList, IngredientInput, IngredientFieldList, SubmitButton
} from './styles/FormStyle.js';


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    };
    this.handleUpdate = this.handleUpdate.bind(this);
  };

  componentWillMount() {
    return fetch(`${config.apiUrl}/recipes/${this.props.id}`)
      .then(response => response.json())
      .then((json) => {
        this.setState({
          info: json.data.info,
          ingredients: json.data.ingredients,
          quantities: json.data.quantities,
          measurements: json.data.measurements,
          steps: json.data.steps
          })
      });
  };
  createSelectItems(data){
    const newData = data.map((item, index) => <option key={index} value={item}>{item}</option>)
    return newData
  }

  renderNameField() {
    return <NameField required type='text' name='name' defaultValue={`${this.state.info.name}`} />
  }

  renderDescriptionField() {
    return <DescriptionArea type='text' name='description' defaultValue={`${this.state.info.description}`} />
  }

  renderTimeFields(){
    return (
      <TimesField>
        <Box>
          <label><span role="img" aria-label="clock image">⏰</span>Prep:</label>
          <input type='time' name="prep_time" defaultValue={`${this.state.info.prep_time}`} />
        </Box>
        <Box>
          <label><span role="img" aria-label="clock image">⏰</span>Cook:</label>
          <input type='time' name="cook_time" defaultValue={`${this.state.info.cook_time}`} />
        </Box>
      </TimesField>
    )
  }

  renderIngredientInputField() {
    return this.state.ingredients.map((ingredient, index) => {
      return <div key={index} className='ingredient-field'>
        <label>{`${index+1}.`}</label>
        <IngredientInput required  type='number' name={`quantity-${index}`} defaultValue={`${this.state.quantities[index].ingredient_quantity}`} />
        <select  name={`measurement-${index}`}>
          {this.createSelectItems(units)}
        </select>
        <IngredientInput required  type='text' name={`ingredient-${index}`} defaultValue={`${ingredient.name}`}/>
      </div>
    })
  }

  renderStepInputField() {
    return this.state.steps.map((step, index) => {
      return <div key={index} className='ingredient-field'>
        <label>{`${index+1}.`}</label>
        <StepArea required  type='text' name={`step-${index}`} defaultValue={`${step.step_description}`}/>
      </div>
    })
  }

  handleUpdate(event) {
    event.preventDefault();
    const newRecipe = ({
      info: this.getInfo(event),
      ingredients: this.getIngredients(event),
      quantities: this.getQuantities(event),
      measurements: this.getMeasurements(event),
      steps: this.getSteps(event)
    });
    this.props.editRecipe(newRecipe, this.state.id);
  };

  getInfo(event) {
    return {
      name: trimAndCapitalise(event.target.name.value),
      description: event.target.description.value,
      prep_time: event.target.prep_time.value,
      cook_time: event.target.cook_time.value
    }
  }

  getIngredients(event) {
    return this.state.ingredients.map((ingredient, index) => {
      return {
        id: ingredient.id,
        name: event.target[`ingredient-${index}`].value
      };
    });
  };

  getMeasurements(event) {
    return this.state.measurements.map((measurement, index) => {
      return {
        id: measurement.id,
        name: event.target[`measurement-${index}`].value
      };
    });
  };

  getQuantities(event) {
    return this.state.quantities.map((quantity, index) => {
      return {
        id: quantity.id,
        recipe_id: this.state.id,
        ingredient_quantity: event.target[`quantity-${index}`].value,
        ingredient_id: this.state.ingredients[index].id,
        measurement_id: this.state.measurements[index].id
      };
    });
  };

  getSteps(event) {
    return this.state.steps.map((step, index) => {
      return {
        id: step.id,
        recipe_id: this.state.id,
        step_number: index,
        step_description: event.target[`step-${index}`].value
      };
    });
  };

  render() {
    return(
      <FormWrapper className='form' onSubmit={this.handleUpdate}>
        <LeftPart>
          <Box>  { (this.state.info)? this.renderNameField():""} </Box>
          <Box> { (this.state.info)? this.renderDescriptionField():""} </Box>
          { (this.state.info)? this.renderTimeFields():""}
          <Box>
            <TitleSection>
              <SectionHeading>Ingredients</SectionHeading>
            </TitleSection>
            <IngredientFieldList>
              { (this.state.info)? this.renderIngredientInputField():"" }
            </IngredientFieldList>
          </Box>
        </LeftPart>
        <StepsPart>
          <TitleSection>
            <SectionHeading>Steps</SectionHeading>
          </TitleSection>
          <StepFieldList>
            { (this.state.info)? this.renderStepInputField():"" }
          </StepFieldList>
          <SubmitButton type='submit' value='Update Recipe' />
        </StepsPart>

      </FormWrapper>
  )};
};
export default RecipeForm;
