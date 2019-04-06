const express = require('express')
const mongoose = require('mongoose')
const properties = require('./properties/properties');
const app = express()
const port = process.env.PORT || 3000
const router = express.Router();

router.get('/', (req, res) => {
    res.send("Hello World!");
  });

app.use(router);

mongoose.connect("mongodb+srv://cluster0-f3avm.mongodb.net/test?authSource=admin",
  properties.mongoDBConnection,
  (err, res) => {
    if (err) {
      console.log(`ERROR: connecting to Database. ${ err }`);
    }
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
  });