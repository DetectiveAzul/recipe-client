import React, {Component} from 'react';
import fetch from 'cross-fetch';
import config from '../../_helpers/config.js';


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id
    };
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

  renderNameField() {
    return <input required type='text' name='name' value={`${this.state.info.name}`} />
  }

  renderDescriptionField() {
    return <input type='text' name='description' value={`${this.state.info.description}`} />
  }

  render() {
    return(
      <fieldset>
        <legend>Edit Recipe ID {`${this.state.id}`}</legend>
        <form className='form'>

          <h4>Info</h4>
          <label>Recipe Name</label>
            { (this.state.info)?this.renderNameField():""}
          <br />

          <label>Description</label>
            { (this.state.info)?this.renderDescriptionField():""}
          <div className='ingredient-form-section'>
            <h4>Ingredients</h4>
              {  }
          </div>

          <div className='steps-form-section'>
            <h4>Steps</h4>
            {  }
          </div>

          <input type='submit' value='Add Recipe' />

        </form>
      </fieldset>
  )};
};
export default RecipeForm;
