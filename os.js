/*
Module name: os

Description 
The os module in Node.js is a built-in module that provides access to the operating system. 
It is a powerful and versatile module that can be used for a variety of tasks, such as:

Getting information about the operating system
Managing files and directories
Running commands
Interacting with the environment

Example */

const os = require('os');

// Get the current working directory
const cwd = os.getcwd();

console.log('The current working directory is:', cwd);

