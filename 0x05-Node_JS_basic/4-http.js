const http = require('http');

const port = 1245;

const app = http.createServer((req, res) => {
  req.statusCode = 200;
  res.end('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});

module.exports = app;
