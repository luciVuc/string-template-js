
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

  it('replaces the placeholder in the template with an empty string if the actual value is `undefined`.', function() {
    assert(stringTemplate.replace('Hello ${name}!') === 'Hello !');
  });

  it('creates an HTML string from an HTML template.', function() {
    const date = Date();
    assert(stringTemplate.replace('<div><h1>Welcome</h1><p>Today is ${today}</p></div>', { today: date }) === '<div><h1>Welcome</h1><p>Today is ' + date + '</p></div>');
  });
});
