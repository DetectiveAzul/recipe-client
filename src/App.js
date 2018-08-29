import React, { Component } from 'react';
import RecipesContainer from './_containers/RecipesContainer.js';
import { connect } from 'react-redux';
import {
  fetchRecipes,
  deleteRecipe
} from './redux/actions/index'

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
      <div>
        <RecipesContainer recipes={recipes} deleteRecipe={this.deleteRecipe}/>
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
