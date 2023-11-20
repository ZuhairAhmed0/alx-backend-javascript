const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let dbInof = 'This is the list of our students\n';
  await countStudents(process.argv[2])
    .then((msg) => {
      dbInof += msg;

      res.end(dbInof);
    })
    .catch((error) => {
      dbInof += error.message;

      res.end(dbInof);
    });
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

module.exports = app;
