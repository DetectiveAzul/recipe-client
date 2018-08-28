import React, { Component } from 'react';
import { Router } from '@reach/router';
import RecipesContainer from './_containers/RecipesContainer.js';
import IndividualRecipe from './_containers/IndividualRecipe.js';
import NavBar from './_components/NavBar.js';
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
      <div className='App'>
        <NavBar />
        <Router>
          <RecipesContainer path="/recipes/" recipes={recipes} />
          <IndividualRecipe path="/recipes/*" />
        </Router>
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
