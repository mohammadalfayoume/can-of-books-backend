'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const mongoose = require('mongoose');


const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/books', {useNewUrlParser: true, useUnifiedTopology: true});
const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String
  });
  
  const BookModel = mongoose.model('Book', bookSchema);
  
  //seed data (insert initial data)
  async function seedData(){
    const firstBook = new BookModel({
      title: 'In Search of Lost Time',
      description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.",
      status: 'Avaliable'
    })
  
    const secondBook = new BookModel({
      title: 'In Search of Lost Time',
      description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.",
      status: 'Avaliable'
    })
  
    const thirdBook = new BookModel({
      title: 'In Search of Lost Time',
      description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.",
      status: 'Avaliable'
    })
  
      await firstBook.save();
      await secondBook.save();
      await thirdBook.save();
  
  }


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
