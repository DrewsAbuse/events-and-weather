'use strict'

const autocannon = require('autocannon')

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

async function foo() {
  const result = await autocannon({
    url: 'http://localhost:5000/',
    path: 'reg',
    method: 'POST',
    connections: 10, //default
    pipelining: 1, // default
    duration: 10, // default
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: `13Drews13`, password: '1337' }),
  })
  console.log([result])
}
foo()
