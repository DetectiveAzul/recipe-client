import React, { Component } from 'react';
import { Router } from '@reach/router';
import RecipesContainer from './_containers/RecipesContainer.js';
import IndividualRecipe from './_containers/IndividualRecipe.js';
import NewRecipe from './_containers/NewRecipe.js';
import EditRecipe from './_containers/EditRecipe.js';
import NavBar from './_components/NavBar.js';
import { connect } from 'react-redux';
import {
  fetchRecipes,
  deleteRecipe
} from './redux/actions/index';

class App extends Component{

  constructor(props){
    super(props)

    this.deleteRecipe = this.deleteRecipe.bind(this)
  }

  componentDidMount(){
    const dispatch = this.props.dispatch
    dispatch(fetchRecipes())
  }

  deleteRecipe(id){
    const dispatch = this.props.dispatch
    dispatch(deleteRecipe(id))
  }

  render(){
      const { recipes } = this.props
    return(
      <div className='App'>
        <NavBar />
        <Router>
          <RecipesContainer path="/recipes/" recipes={recipes} deleteRecipe={this.deleteRecipe} />
          <IndividualRecipe path="/recipes/:id" />
          <EditRecipe path="/recipes/:id/edit"/>
          <NewRecipe path="/recipes/new" />
          {/* <NoFound default /> */}
        </Router>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    recipes: state.recipesReducer.recipes
  }
}

export default connect(mapStateToProps)(App)
