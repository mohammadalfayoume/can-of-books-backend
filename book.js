'use strict'
const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String,
    email: String
  });
  
  const BookModel = mongoose.model('Book', bookSchema);
  
  //seed data (insert initial data)
  async function seedData(){
    const firstBook = new BookModel({
      title: 'In Search of Lost Time',
      description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.",
      status: 'Avaliable',
      email: 'aa@mail.com'
    })
  
    const secondBook = new BookModel({
      title: 'In Search of Lost Time',
      description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.",
      status: 'Avaliable',
      email: 'aa@mail.com'
    })
  
    const thirdBook = new BookModel({
      title: 'In Search of Lost Time',
      description: "Swann's Way, the first part of A la recherche de temps perdu, Marcel Proust's seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.",
      status: 'Avaliable',
      email: 'aa@mail.com'
    })
  
      await firstBook.save();
      await secondBook.save();
      await thirdBook.save();
  
  }
  
  // seedData();

module.exports=BookModel
