import React, { Component } from 'react';
import RecipeSmallListContainer from './_containers/RecipesContainer.js';
import { connect } from 'react-redux';
import {
  fetchRecipes
} from './redux/actions/index'

class App extends Component{

  componentDidMount(){
    const dispatch = this.props.dispatch
    dispatch(fetchRecipes())
  }

  render(){
    const { recipes } = this.props
    return(
      <div>
        <RecipeSmallListContainer recipes={recipes} />
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    recipes: state.recipesReducer.recipes
  }
}

export default connect(mapStateToProps)(App)
