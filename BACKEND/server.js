const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

mongoose.set("strictQuery", true);

const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URL);
      console.log("Connected to mongoDB!");
    } catch (error) {
      console.log(error);
    }
  };

  
app.listen(8000,() => {
    connect();
    console.log('Server running at port 8000!')
})