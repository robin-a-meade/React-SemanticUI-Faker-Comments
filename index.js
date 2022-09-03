const express = require('express');
const app = express();

const faker = require('@faker-js/faker').faker;

// Use cors module for enable Cross-origin resource sharing
// https://riptutorial.com/node-js/example/9534/json-api-with-expressjs
var cors = require('cors');
app.use(cors()); // for all routes

// Execute the webpackRunner.js script.
// It spawns a child process to run webpack with its --watch option
require('./webpackRunner');

app.use(express.static('public'));

app.get('/comments', function(req, res) {
  var data = [
    { name: faker.name.firstName(), avatar: faker.image.avatar(), date: faker.date.recent(10), text: faker.hacker.phrase() },
    { name: faker.name.firstName(), avatar: faker.image.avatar(), date: faker.date.recent(10), text: faker.hacker.phrase() },
    { name: faker.name.firstName(), avatar: faker.image.avatar(), date: faker.date.recent(10), text: faker.hacker.phrase() },
  ];
  res.status(200).json(data);
})

const PORT = 1234; // Use any port you want
// NOTE: This port is internal to the container running the replit.
// Replit magic will make the replit accessible externally
// on port 443 at your replit's HTTPS URL.
// Consequences of this approach is that 1) a replit can have at most 
// one listening port, and 2) only HTTP protocol is supported, although
// WebWorkers, after an initial HTTP handshake, can be used to implement
// custom protocols beyond HTTP.



app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express server started on port ${PORT}`);
});