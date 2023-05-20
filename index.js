const express = require('express');
const mongoose = require('mongoose');

const app = express();

const cors = require('cors');
const userRoute = require('./route/userRoute');

const productRoute = require('./route/productRoute');
const fileUpload = require('express-fileupload');

mongoose.connect('mongodb+srv://rajstha:9840rajstha@cluster0.lvr5vhq.mongodb.net/')
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => { console.log(err); })

app.use(cors());
app.use(express.json());

app.use(fileUpload({
  limits: { fieldSize: 50 * 1024 * 1024 },
  createParentPath: true,
  abortOnLimit: true
}));


app.use('/uploads', express.static('uploads'));

app.use(userRoute);
app.use(productRoute);