const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200); 
  res.json('welcome to the port 3000, This is Shubham');
})

app.listen(PORT, (err) => {
  if(!err) {
    console.log(`Server is running on port ${PORT}`); 
  } else {
    console.log('Server is not running', err);
  }
})