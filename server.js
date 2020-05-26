const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

// importing routes
// const AdminRoutes = require('./routes/admin');
const UserRoutes = require('./routes/users');

// config
const config = require("./config/keys");

// connect to mongodb
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// initializing express
const app = express();

//body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  next();
});

//Use Routes
app.use('/user', UserRoutes);

//port configurations
const PORT = process.env.PORT | 8080;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));