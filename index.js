const express = require('express');
const mongoose = require('mongoose');

const app = express();

const cors = require('cors');
const userRoute = require('./route/userRoute');

mongoose.connect('mongodb+srv://rajstha:9840rajstha@cluster0.lvr5vhq.mongodb.net/')
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => { console.log(err); })

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  return res.send('Homepage');
})


app.use(userRoute);