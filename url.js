/*
Module name: url

Description

The url module in Node.js provides a simple way to parse and manipulate URLs. 

A URL is a Uniform Resource Locator, which is a way of specifying the location of a resource on the internet.

The url module provides a number of functions for parsing and manipulating URLs. 
The most basic function is the parse() function. This function takes a URL as its argument and returns an object 
that represents the parsed URL.

Example
For example, the following code parses the URL https://www.google.com/ and prints the host name:*/
const url = require('url');

const parsedUrl = url.parse('https://www.google.com/');

console.log(parsedUrl.hostname); // www.google.com
