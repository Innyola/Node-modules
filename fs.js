/*
Module name: fs

Description
The fs module in Node.js provides a way of interacting with the file system. 
It includes a set of functions for reading, writing, creating, and deleting files.


Example */
const fs = require('fs');

const contents = fs.readFileSync('myfile.txt');

console.log(contents); // The contents of the file
