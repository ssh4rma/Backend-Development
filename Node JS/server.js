const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('You are welcome at localhost:3000');
})

app.listen(port, () => {
  console.log(` http://localhost:${port}`)
});