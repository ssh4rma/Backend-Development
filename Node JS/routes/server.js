const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200); 
  res.send('welcome to the port 3000, This is Shubham');
})

//to a specific path
app.get('/hello', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send('<h1>Hello User, this is Shubham from port 3000</h1>')
})

//post request
app.post('/', (req, res) => {
  const {name} = req.body; 
  res.send(`Welcome ${name}`);
})

app.listen(PORT, (err) => {
  if(!err) {
    console.log(`Server is running on port ${PORT}`); 
  } else {
    console.log('Server is not running', err);
  }
})