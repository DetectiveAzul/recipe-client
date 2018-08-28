export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL'
};

export function addRecipe(recipe) {
  return { type: ADD_RECIPE, recipe };
};

export function removeRecipe(index) {
  return { type: REMOVE_RECIPE, index };
};

export function setVisibilityFilter(filter) {
  type: 'SET_VISIBILITY_FILTER',
  filter
};