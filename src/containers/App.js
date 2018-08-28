import React, { Component } from 'react';
import RecipesContainer from './RecipesContainer';
import { connect } from 'react-redux';
import {
  fetchRecipes
} from '../redux/actions/index'

class App extends Component{

  componentDidMount(){
    const dispatch = this.props.dispatch
    dispatch(fetchRecipes())
  }

  render(){
    const { recipes } = this.props
    return(
      <div>
        <RecipesContainer recipes={recipes} />
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
