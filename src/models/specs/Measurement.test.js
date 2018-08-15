import assert from 'assert';
import Measurement from '../Measurement.js';

describe('Measurement', function() {
  let measurement01;
  let measurement02;

  beforeEach(function() {
    measurement01 = new Measurement({name: 'kg'});
    measurement02 = new Measurement({id: 1, name: 'pint'});
  });

  it('should have a name', function () {
    const actual = measurement01.name;
    const expected = 'kg';
    assert.strictEqual(actual, expected);
  });

  it('should not have an id when is first created', function() {
    const actual = measurement01.id;
    const expected = undefined;
    assert.strictEqual(actual, expected);
  });

  it('should have an id when loaded from the db', function() {
    const actual = measurement02.id;
    const expected = 1;
    assert.strictEqual(actual, expected);
  });

});
