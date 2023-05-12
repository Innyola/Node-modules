/*
Module name: path

Description 
The path module in Node.js is a built-in module that provides utilities for working with file paths. 
It provides a way to work with directories and file paths.

It is a powerful and versatile module that can be used for a variety of tasks, such as:

Getting information about file paths,
Manipulating file paths,
getting file extensions,
normalizing paths,
Working with relative and absolute paths,
Converting between different path formats.


Example */
const path = require('path');

// Get the extension of a file
const ext = path.extname('myfile.txt');

console.log('The extension of the file is:', ext);

