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

let mongoPath = process.env.MONGO_PATH
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
app.put("/updateBook/:id", updateBooksHandler);
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
      // console.log(result);
      res.send(result);
    }
  });
}

async function addBooksHandler(req, res) {
  // console.log(req.body);
  const { title, description, status,email } = req.body;
  await BookModel.create({
    title: title,
    description: description,
    status: status,
    email: email
  });

  BookModel.find({}, (err, result) => {
    // console.log(result);
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
  BookModel.deleteOne(
    {
      _id: bookId,
    },
    (err, result) => {
      BookModel.find({}, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          // console.log(result);
          res.send(result);
        }
      });
    }
  );
}

function updateBooksHandler(req, res) {
  const id = req.params.id;
  const { title, description, status,email } = req.body; //Destructuring assignment
  BookModel.findByIdAndUpdate(
    id,
    { title, description, status,email },
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        BookModel.find({}, (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log(result);
            res.send(result);
          }
        });
      }
    }
  );
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
