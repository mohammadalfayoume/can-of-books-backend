'use strict';

let BookModel = require('./book');
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose = require('mongoose');


const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});




//Routes
//Test route
// http://localhost:3001/test
app.get('/test', (request, response) => {

  response.send('test request received')

})

// http://localhost:3001/getBooks
app.get('/getBooks',getBooksHandler);
function getBooksHandler(req,res) {
  BookModel.find({},(err,result)=>{
      if(err)
      {
          console.log(err);
      }
      else
      {
          console.log(result);
          res.send(result);
      }
  })
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
