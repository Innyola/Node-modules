/*
Module nmae: util

Description 
Util is a built-in module in Node.js that provides several utility functions that are helpful in programming and debugging. 
It contains a variety of functions, including ones for working with objects, arrays, strings, and more. 

Example */
const util = require('util');

const obj = {
name: 'John Doe',
age: 30
};

const str = util.inspect(obj);

console.log(str); // { name: 'John Doe', age: 30 }

