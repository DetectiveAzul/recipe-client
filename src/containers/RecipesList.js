import React, {Component} from 'react';

class RecipesList extends Component {
  constructor() {
    super()
    this.state = {
      recipes: []
    };
  };

  componentWillMount() {
    this.props.get('recipes');
  }

  render() {
    return(
    <div className="recipes-list">
      RecipesList
    </div>
  )};
};

export default RecipesList;
