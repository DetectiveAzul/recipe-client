import assert from 'assert';
import Quantity from '../Quantity.js';

describe('Quantity', function() {
  let quantity01;
  let quantity02;

  beforeEach(function() {
    quantity01 = new Quantity({
      recipeId: 1,
      ingredientId: 1,
      measurementId: 1,
      ingredientQuantity: 10.00
    });
    quantity02 = new Quantity({
      id: 1,
      recipeId: 1,
      ingredientId: 1,
      measurementId: 1,
      ingredientQuantity: 10.00
    });
  });

  it('should have a recipeId', function() {
    const actual = quantity01.recipeId;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should have an ingredientId', function() {
    const actual = quantity01.ingredientId;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should have a measurementId', function() {
    const actual = quantity01.measurementId;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should have an ingredientQuantity', function() {
    const actual = quantity01.ingredientQuantity;
    const expected = 10.00;
    assert.strictEqual(actual, expected);
  });


  it('should not have an id when is first created', function() {
    const actual = quantity01.id;
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should have an id when loaded from the db', function() {
    const actual = quantity02.id;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

});
