const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/demoDB')
  .then(() => console.log('Successfully connected'))
  .catch((err) => console.log(err));

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
const Demo = new mongoose.model('Demo', demoSchema); 

async function manageDocs() {
  try {
    //d1
    const d1 = new Demo({
      name: 'Shubham', 
      phone: 2341324,
      email: 'shubham@gmail.com'
    }); 
    await d1.save();
    console.log('d1 is inserted in db');

    //d2
    const d2 = new Demo({
      name: 'John',
      phone: 1234134,
      email: 'john@gmai.com'
    })
    await d2.save();
    console.log('d2 is inserted in db');
    
    //d3
    const d3 = new Demo({
      name: 'Alice',
      phone: 181324,
      email: 'alice@gmai.com'
    })
    await d3.save();
    console.log('d3 is inserted in db');

    //log all documents before deletion
    let docs = await Demo.find();
    console.log('Documents before deletion', docs);
    

    const delRecord = await Demo.deleteOne({name: 'Shubham'});
    console.log('Deleted result for Shubham', delRecord);

    // docs = await Demo.find();
    // console.log('Documents after deletion', docs);

    console.log('Find by Id');
    let f = await Demo.findOne({name: 'Alice'});
    console.log(f);
    
  } catch(err) {
    console.log(err);
  }
}

manageDocs();