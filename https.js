/*
Module name: https 

Description 
The https module in Node.js is a built-in module that allows you to create secure HTTP servers 
and make secure HTTP requests. 

Example */

const https = require('https');

// Create a server
const server = https.createServer((req, res) => {
// Send a response
res.writeHead(200, {'Content-Type': 'text/plain'});
res.end('Hello, world!');
});

// Listen on port 443
server.listen(443, () => {
console.log('Server listening on port 443');
});