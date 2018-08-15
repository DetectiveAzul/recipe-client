import assert from 'assert';
import Recipe from '../Recipe.js';

describe('Recipe', function() {
  let recipe01;

  beforeEach(function() {
    recipe01 = new Recipe({name: 'Gyros', description: 'Yummy food'});
  });

  it('should have a name', function () {
      const actual = recipe01.name;
      const expected = 'Gyros';
      assert.strictEqual(actual, expected);
    });

  it('should have a description', function() {
    const actual = recipe01.description;
    const expected = 'Yummy food';
    assert.strictEqual(actual, expected);
  });

});
