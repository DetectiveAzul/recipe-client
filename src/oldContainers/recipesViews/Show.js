import React, {Component} from 'react';

class RecipeShow extends Component {
  render() {
    return(<h1>¡Hello world! Recipe {this.props.data.name}</h1>)
  }
}

export default RecipeShow;
