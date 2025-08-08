const express = require('express');
const app = express();
const PORT = 8081;

app.get('/', (req, res) => {
  res.send('Hello from Jenkins CI/CD pipeline!');
});

app.listen(PORT, '0.0.0.0' () => {
  console.log(`App is running on port ${PORT}`);
});