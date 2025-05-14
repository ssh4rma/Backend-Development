const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:2701/demoDB')
  .then(() => console.log('Successfully connected'))
  .catch(() => console.log('Error connecting'))