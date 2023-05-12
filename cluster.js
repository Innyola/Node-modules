/*
Module name: cluster 

Description
The cluster module in Node.js allows you to create multiple child processes that share the same server port. 
This can be useful for improving performance or for load balancing.


Example */
const cluster = require('cluster');

// Create a new cluster instance.
const app = cluster();

// Start two child processes.
app.fork();
app.fork();

// Get a list of all of the child processes.
const workers = app.workers;

// Get a specific child process.
const worker = app.worker(0);

// Stop a child process.
worker.stop();

// Restart a child process.
worker.restart();

// Get information about a child process.
const status = worker.status;
const memoryUsage = worker.memoryUsage;

