import assert from 'assert';
import Step from '../Step.js';

describe('Step', function() {
  let step01;
  let step02;

  beforeEach(function() {
    step01 = new Step({recipeId: 1, stepNumber: 1, stepDescription: 'Push the egg'});
    step02 = new Step({id: 1, recipeId: 1, stepNumber: 2, stepDescription: 'Fry the egg'});
  });

  it('should have a recipeId', function() {
    const actual = step01.recipeId;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should have a number', function () {
    const actual = step01.stepNumber;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

  it('should have a description', function () {
    const actual = step01.stepDescription;
    const expected = 'Push the egg';
    assert.strictEqual(actual, expected);
  });

  it('should not have an id when is first created', function() {
    const actual = step01.id;
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should have an id when loaded from the db', function() {
    const actual = step02.id;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

});
