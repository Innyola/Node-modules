/*
Module name: v8

Description 
The v8 module in Node.js provides access to the V8 JavaScript engine. 
V8 is a high-performance JavaScript engine that is used by Google Chrome and Node.js.

The v8 module provides a number of functions for working with the V8 engine. 
For example, the compile() function can be used to compile JavaScript code into machine code. 
The run() function can be used to run JavaScript code.

The v8 module is a useful tool for working with JavaScript in Node.js. 
It provides a simple and efficient way to compile and run JavaScript code.



Example 
This is an example of how v8 module can be used to compile and run JavaScript code:*/
const v8 = require('v8');

const code = `function add(a, b) {
return a + b;
}`;

const compiled = v8.compile(code);

const result = compiled.call(null, 1, 2);

console.log(result); // 3

