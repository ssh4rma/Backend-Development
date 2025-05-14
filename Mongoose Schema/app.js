const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoDB')
  .then(() => console.log('Successfully connected'))
  .catch(() => console.log('Error connecting'));

const demoSchema = new mongoose.Schema({
  name: {
    type: String, 
    require: true
  },
  phone: {
    type: Number, 
    require: false
  },
  email: {
    type: String,
    require: true
  }
})

//make a mongoose model
const demo = new mongoose.model('Demo', demoSchema); 

const d1 = new demo ({
  name: 'Shubham', 
  phone: 9112341343,
  email: 'shubham@gmail.com'
});

d1.save();