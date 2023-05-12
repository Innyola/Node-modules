/*
Module name: dns

Description 
The dns module in Node.js provides a way of performing name resolutions. For example, it is used 
to look up IP addresses of host names. 

Although named for the Domain Name System (DNS), it does not always use the DNS protocol for lookups.

Example */

const dns = require('dns');

const ip = await dns.lookup('google.com');

console.log(ip); // '172.217.14.192'
