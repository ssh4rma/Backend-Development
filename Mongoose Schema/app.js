const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoDB')
  .then(() => console.log('Successfully connected'))
  .catch(() => console.log('Error connecting'));

const demoSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: true
  },
  phone: {
    type: Number, 
    required: false
  },
  email: {
    type: String,
    required: true
  }
})

//make a mongoose model
const demo = new mongoose.model('Demo', demoSchema); 

const d1 = new demo ({
  name: 'Shubham', 
  phone: 9112341343,
  email: 'shubham@gmail.com'
});

d1.save()
  .then(() => console.log('success for d1'))
  .catch(() => console.log('error inserting d1'));

const d2 = new demo ({
  name: 'John', 
  phone: '12345', 
  email: 'john@gmail.com'
})
d2.save()
  .then(() => console.log('success for d2'))
  .catch(() => console.log('error inserting d2'));

const d3 = new demo ({
  name: 'Alice', 
  phone: 991212, 
  email: 'alice@gmail.com'
})
d3.save();

// demo.deleteOne({name: 'Alice'});