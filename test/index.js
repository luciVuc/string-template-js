
var assert = require('assert');
var stringTemplate = require('../index');

describe('string-template-js', function() {
  it('has a function called \'replace\'', function() {
    assert(typeof stringTemplate.replace === 'function');
  });

  it('returns the expected string when called with correct arguments', function() {
    assert(stringTemplate.replace('Hello ${name}!', { name: 'world' }) === 'Hello world!');
  });

  it('evaluates and uses the resulted value when an actual value of the second argument is a function', function() {
    assert(stringTemplate.replace('2 x 3 = ${val}', { val: function() {
      return 2 * 3;
    }}) === '2 x 3 = 6');    
  });

  it('if an actual value is undefined it replaces the placeholder in the template with an empty string.', function() {
    assert(stringTemplate.replace('Hello ${name}!') === 'Hello !');
  });
});
