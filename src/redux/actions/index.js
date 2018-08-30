import fetch from 'cross-fetch';
import ApiHelper from '../../_helpers/ApiHelper'

const ROOT_URL = 'http://localhost:3001/api';

//CONSTANTS
export const REQUEST_RECIPES = "REQUEST_RECIPES";
export const RECEIVE_RECIPES = "RECEIVE_RECIPES";
export const ADD_RECIPE = 'ADD_RECIPE';
export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const UPDATE_RECIPE = 'UPDATE_RECIPE';
export const UPDATE_RECIPE_SUCCESS = 'UPDATE_RECIPE_SUCCESS';
export const DELETE_RECIPE_SUCCESS = 'DELETE_RECIPE_SUCCESS';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_NONE: 'SHOW_NONE'
};


//ACTIONS
export function requestRecipes() {
  return{
    type: REQUEST_RECIPES
  }
}

export function receiveRecipes(json){
  return{
    type: RECEIVE_RECIPES,
    recipes: json.data,
    receivedAt: Date.now()
  }
}

export function fetchRecipes() {
  return dispatch => {
    dispatch(requestRecipes())
    return fetch(`${ROOT_URL}/recipes`)
      .then(response => response.json())
      .then(json => dispatch(receiveRecipes(json)))
  }
}

export function addRecipe(recipe) {
  const api = new ApiHelper('/recipes/full')
    return dispatch => {
      api.post(recipe)
        .then((res) => {
          dispatch(addRecipeSuccess(recipe, res.new_entry.id))
        })
    }
}

export function addRecipeSuccess(recipe, id) {
  return{
    type: ADD_RECIPE_SUCCESS,
    recipe: { id: id,
      name: recipe.info.name,
      description: recipe.info.description,
      preptime: recipe.info.preptime,
      cooktime: recipe.info.cooktime
    }
  }
}

export function updateRecipe(recipe, id) {
  const api = new ApiHelper(`/recipes/${id}/full`);
    return dispatch => {
      api.put(recipe)
        .then((res) => {
          dispatch(updateRecipeSuccess(recipe, id))
        })
    }
}

export function updateRecipeSuccess(recipe, id) {
  return{
    type: UPDATE_RECIPE_SUCCESS,
    recipe: { id: id,
      name: recipe.info.name,
      description: recipe.info.description,
      preptime: recipe.info.preptime,
      cooktime: recipe.info.cooktime
     }
  }
}


export function deleteRecipeSuccess(id) {
  return{
    type: DELETE_RECIPE_SUCCESS,
    id
  }
}

export function deleteRecipe(id){
  const api = new ApiHelper('/recipes')
    return dispatch => {
      api.delete(id)
      .then(() => {
        dispatch(deleteRecipeSuccess(id))
    })
  }
}

export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};
