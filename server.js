"use strict";

let BookModel = require("./book");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const mongoose = require("mongoose");
const { default: axios } = require("axios");

app.use(express.json());

const PORT = process.env.PORT || 3001;

let mongoPath =
  "mongodb://Mohammad:0000@ac-bteciiv-shard-00-00.n4qbk7c.mongodb.net:27017,ac-bteciiv-shard-00-01.n4qbk7c.mongodb.net:27017,ac-bteciiv-shard-00-02.n4qbk7c.mongodb.net:27017/?ssl=true&replicaSet=atlas-bcnmyf-shard-0&authSource=admin&retryWrites=true&w=majority";

// connect mongoose with DB
mongoose.connect(mongoPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Routes
app.get("/", homeHandler);
app.get("/test", testHandler);
app.get("/getBooks", getBooksHandler);
app.post("/addBook", addBooksHandler);
app.delete("/deleteBook/:id", deleteBooksHandler);
app.get("*", defaultHandler);

// http://localhost:3001/
function homeHandler(req, res) {
  res.send("Hello from home route");
}

// http://localhost:3001/test
function testHandler(req, res) {
  res.send("test request received");
}

function defaultHandler(req, res) {
  res.send("Page not found");
}

// http://localhost:3001/getBooks
function getBooksHandler(req, res) {
  BookModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
}

async function addBooksHandler(req, res) {
  console.log(req.body);
  const { title, description, status } = req.body;
  await BookModel.create({
    title: title,
    description: description,
    status: status,
  });

  BookModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
}

function deleteBooksHandler(req, res) {
  const bookId = req.params.id;
  BookModel.deleteOne({
    _id: bookId

  },(err,result)=>{
    BookModel.find({}, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    });
  })

}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
