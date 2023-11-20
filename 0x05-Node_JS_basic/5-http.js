const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
const app = http.createServer(async (req, res) => {
  req.statusCode = 200;

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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
  }
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

module.exports = app;
