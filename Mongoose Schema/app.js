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
});

// Define instance method on the schema
demoSchema.methods.getAllInfo = function () {
  return `${this.name}, ${this.phone}, ${this.email}`;
};

demoSchema.virtual('getName').get(function() {
  return `This is ${this.name}`;
}); 

const Demo = mongoose.model('Demo', demoSchema);

async function manageDocs() {
  try {
    // d1
    const d1 = new Demo({
      name: 'Shubham',
      phone: 2341324,
      email: 'shubham@gmail.com'
    });
    await d1.save();
    console.log('d1 is inserted in db');

    // d2
    const d2 = new Demo({
      name: 'John',
      phone: 1234134,
      email: 'john@gmail.com' 
    });
    await d2.save();
    console.log('d2 is inserted in db');

    // d3
    const d3 = new Demo({
      name: 'Alice',
      phone: 181324,
      email: 'alice@gmail.com' 
    });

    await d3.save();
    console.log('d3 is inserted in db');

    console.log('Calling getAllInfo on d3:', d3.getAllInfo());

    let docs = await Demo.find();
    console.log('Documents before deletion:', docs);

    const delRecord = await Demo.deleteOne({ name: 'Shubham' });
    console.log('Deleted result for Shubham:', delRecord);

    docs = await Demo.find();
    console.log('Documents after deletion:', docs);

    console.log('Find by name (Alice):');
    let f = await Demo.findOne({ name: 'Alice' });
    console.log(f);

    if (f) {
      console.log('Calling getAllInfo on Alice:', f.getAllInfo());
    }

    console.log('Calling the virtual getName fun', f.getName);

  } catch (err) {
    console.log(err);
  } finally {
    mongoose.connection.close(); 
  }
}

manageDocs();