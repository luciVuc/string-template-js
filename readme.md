# string-template-js

A simple string templating utility.

## Description 

It serves to build new strings based on templates and actual values. A template is a string, which similar to the `ES6 Literal Templates` contains placeholders that will be replaced with actual values, while the actual values are properties of a JS object or hashmap. A placeholder is an identifier enclosed within curly braces and preceded by the 'Dollar' sign (`${expression}`), which is expected to match a property of the actual values object.

## API

### `replace (sTemplate, mData)`

Returns a new strings, created based on a `ES6 Literal Template`-like string and the set actual values.

#### Paramenters

  * `sTemplate`, `{string}` - the string template, which, similar to the ES6 literal templates can contain value placeholders enclosed within curly braces and preceded by the 'Dollar' sign (`${expression}`);
  * `mData`, `{object}` - a JS object (hashmap) containing the actual values to replace the template placeholders with;

## Examples

```js
var stringTemplate = require("string-template-js");

// the actual value is a string
stringTemplate.replace("Hello ${value}!", { value: "world" }); // "Hello world!"

// if the actual value is a function, it will be evaluated
stringTemplate.replace("Hello ${value}!", { value: function() { return "world"; } }); // "Hello world!"
```

## Installation

`npm install string-template-js`

## Version

1.0.0

## License

MIT