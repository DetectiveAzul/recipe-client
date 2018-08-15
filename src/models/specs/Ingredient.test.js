import assert from 'assert';
import Ingredient from '../Ingredient.js';

describe('Recipe', function() {
  let ingredient01;

  beforeEach(function() {
    ingredient01 = new Ingredient({name: 'Egg'});
  });

  it('should have a name', function () {
      const actual = ingredient01.name;
      const expected = 'Egg';
      assert.strictEqual(actual, expected);
    });

});
