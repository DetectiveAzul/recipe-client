import './app.css';
import React, { Component } from 'react';
import { Router } from '@reach/router';
import RecipesContainer from './_containers/RecipesContainer.js';
import IndividualRecipe from './_containers/IndividualRecipe.js';
import Home from './_containers/Home.js';
import NotFound from './_containers/NotFound.js';
import NewRecipe from './_containers/NewRecipe.js';
import EditRecipe from './_containers/EditRecipe.js';
import NavBar from './_components/NavBar.js';
import { connect } from 'react-redux';
import {
  fetchRecipes,
  deleteRecipe
} from './redux/actions/index';
//style
import styled from 'styled-components';
const RouterWrapper = styled.div`
  top: 110px;
  max-height: 75vh;
  width: 95%;
  min-width: 600px;
  overflow: scroll;
  position: fixed;
`

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
        <RouterWrapper >
          <Router>
            <Home path="/" />
            <RecipesContainer path="/recipes/" recipes={recipes}  />
            <IndividualRecipe path="/recipes/:id" deleteRecipe={this.deleteRecipe}/>
            <EditRecipe path="/recipes/:id/edit" />
            <NewRecipe path="/recipes/new" />
            <NotFound default />
          </Router>
        </RouterWrapper>
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
