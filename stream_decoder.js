/*
Module name: String decoder

Description

The String Decoder module provides a way of decoding Buffer objects into strings.
It provides a way to handle multi-byte character encoding in situations where a 
Buffer object may contain only a partial sequence of characters.

Example */
var StringDecoder = require('string_decoder').StringDecoder;
var d = new StringDecoder('utf8');
var b = Buffer('abc');

console.log(b); //write buffer
console.log(d.write(b)); // write decoded buffer;