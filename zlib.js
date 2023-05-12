/*Module name: zlib

Description
The zlib module in Node.js provides a way of compressing and decompressing data. It is implemented 
using the zlib library, which is a popular library for compression and decompression.

The zlib module provides a number of functions for compressing and decompressing data. 
The most basic function is the deflate() function. This function takes a string or buffer as its 
argument and returns a compressed string or buffer.

Example*/
const zlib = require('zlib');

// Compress a string
const compressed = zlib.deflate('Hello, world!');
console.log(compressed);


// Decompress a buffer
const decompressed = zlib.inflate();

console.log(decompressedString); 
