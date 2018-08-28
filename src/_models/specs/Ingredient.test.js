import assert from 'assert';
import Ingredient from '../Ingredient.js';

describe('Ingredient', function() {
  let ingredient01;
  let ingredient02;

  beforeEach(function() {
    ingredient01 = new Ingredient({name: 'Egg'});
    ingredient02 = new Ingredient({id: 1, name: 'Yolk'});
  });

  it('should have a name', function () {
    const actual = ingredient01.name;
    const expected = 'Egg';
    assert.strictEqual(actual, expected);
  });

  it('should not have an id when is first created', function() {
    const actual = ingredient01.id;
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should have an id when loaded from the db', function() {
    const actual = ingredient02.id;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

});
