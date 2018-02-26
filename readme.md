# string-template-js

## Description 

String templating utility that creates new string literals based on templates and embedded expressions (or values). A template is given as a string, which similar to the `ES6 Literal Templates` contains placeholders that will be replaced with actual values or expressions, whereas the actual values or expressions are given as properties of a JS object (a hashmap of key-value pairs). A placeholder is an identifier enclosed within curly braces and preceded by the 'Dollar' sign (`${expression}`), which is expected to match the reference to the actual value or expression.

## Usage

### `replace (sTemplate, mData)`

#### Parameters:

Name	| Type	| Description
------|-------|-------------
`sTemplate`	| `String`	| The string template, which, similar to the ES6 literal templates can contain value placeholders enclosed within curly braces and preceded by the 'Dollar' sign (`${expression}`)
`mData`	| `Object`	| The JS object (hashmap) containing the actual values and expressions to replace the template placeholders with.

#### Returns:
Type: `String`


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

1.0.2

## License

MIT