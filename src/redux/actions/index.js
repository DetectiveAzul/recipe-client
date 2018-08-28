export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';

export function addRecipe(recipe) {
  return { type: ADD_RECIPE, recipe };
};

export function removeRecipe(index) {
  return { type: REMOVE_RECIPE, index };
};
