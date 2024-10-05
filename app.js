const express = require('express');
const app = express();
const port = 3000;

const Schedule = require('./Course');

const Perpetual = require('./Perpetual');

app.get('/getCourse', (req, res) => {
  res.json(Schedule);
});

app.get('/getPerpetual', (req, res) => {
  res.json(Perpetual);
});

app.listen(port, () => {
  console.log(`API在http://localhost:${port}上监听`);
});