//middleware implementation
import express from 'express';
const app = express();

app.use((req, res, next) => {
  console.log(`${req.method}, ${req.url}`);
  next();
}); 

app.use((req, res, next) => {
  const loggedIn = true;
  if(!loggedIn) {
    return res.status(401).send('Not logged in!');
  }
  next();
});

app.get('/', (req, res) => {
  console.log('Welcome to localhost'); 
});

app.listen(3000); 