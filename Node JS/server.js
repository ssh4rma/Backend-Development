const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(__dirname));

app.get('/', (req, res) => {
  res.send('Server is running! Try <a href="/static/images.jpg">viewing the image</a>.');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));