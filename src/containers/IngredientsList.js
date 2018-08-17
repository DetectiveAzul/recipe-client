import React, {Component} from 'react';

class IngredientsList extends Component {
  constructor() {
    super()
    this.state = {
      ingredients: []
    };
  };

  componentWillMount() {
    this.props.get('ingredients');
  }

  render() {
    return(
    <div className="ingredients-list">
      IngredientsList
    </div>
  )};
};

export default IngredientsList;
