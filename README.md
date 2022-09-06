# Start your own "Can of Books" App

This repository has starter code to begin work on creating your own online bookshelf.

## What can books do?

Books are life-changing. They have the power to enlighten, educate, entertain, heal, and help us grow. Build out this code base to create an web app to track what books have impacted you, and what's recommended to read next.

## Use this template

Clone this repo to your own account with the green "Use this template" button. Then, add any collaborators. Now you are ready to start adding features! Deploy your site to let the world know which books have had the greatest impact on you, and what's recommended. Enjoy!

# Project Name

**Author**: Mohammad Alfayoume and Tareq
**Version**: 2.0.0

## Overview
In this application I created an online bookshelf, so user can add for his library any book he want with title, description and status of book.
The user also can delete any book from the bookshelf.


## Getting Started
I will explain it in steps:
1- create two repo, one of them for front-end and the other one for back-end
2- In front-end add a form that meke a user enter the name of book, description and status, and submit button.
3- In the form add onSubmit handler to add a book
4- in the add handler submit function you have to send a requist to the server to add a book with his values inside the object and send a request by POST method.
5- go to the back-end and creat a route and add book handler function to create the new book with values that come from front-end and send a response again to front end with new book.
6- then you render the new book by set state the new value of books
7- creat a delete handler to delete any book .
8- in the delete handler function you have to send a request to the back-end to delete the book by DELETE method and you pass the id number as a params because every book has a unique id number.
9- in the back-end, create new route with delete handler function.
10- in the delete handler function you get the book with specific id and send a response to front end.


## Architecture
for front end we have many components:
1- About component: It's a Parent for all other components.
2- Header component: contain a name fo applicaltion and two links that lead user to profile and home route.
3- BestBooks component that render all books with the form and other stuff.
4- Footer: contains a footer of my application.
for back-end it consists of two file:
1- server.js file
2- books.js file 


Name of feature: Bookshelf application

Estimate of time needed to complete: 5 hrs

Start time: 5 PM

Finish time: 1 AM

Actual time needed to complete: 8 hrs