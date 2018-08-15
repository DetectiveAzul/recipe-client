import assert from 'assert';
import Recipe from '../Recipe.js';

describe('Recipe', function() {
  let recipe01;
  let recipe02;

  beforeEach(function() {
    recipe01 = new Recipe({name: 'Gyros', description: 'Yummy food'});
    recipe02 = new Recipe({id: 1, name: 'Tortilla', description: 'Juicy ruin'});
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

  it('should not have an id when is first created', function() {
    const actual = recipe01.id;
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should have an id when loaded from the db', function() {
    const actual = recipe02.id;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

});
