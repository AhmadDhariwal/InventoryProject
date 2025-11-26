const express = require('express');
const path = require('path');
const inventoryschema = require("./src/models/model");
const { connecttomongodb} = require('./connect');
const route = require("./src/routes/route");


const app = express();
const port = 3000;



connecttomongodb('mongodb://localhost:27017/inventorymanagement')
.then(() =>   console.log('MongoDB connected'))
.catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

  app.use (express.json());
app.use(express.urlencoded({extended :false}));


app.use('/items',route);

app.get('/', (req, res) => {
  res.send('Hello World'); 
});

app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', path: req.originalUrl });
});

app.listen(port, () => console.log(`Server Started at ${port}`));
