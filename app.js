
const express = require("express");
const logger = require("morgan");
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const json = require('./public/css/data')


const app = express();

app.use(logger("dev"));

app.set("views", "./src/views");
app.set("view engine", "pug");

app.use("/static", express.static("./public"));


app.get("/", (request, response) => {
  response.render("main", {
    projectTitle: "GET /books"
  });
});

app.get("/docs/books/list", (request, response) => {
  response.render("ListBooks", {
    projectTitle: "GET /books",
    listBooks: json.listBooks
  });
});

app.get("/docs/books/item", (request, response) => {
  response.render("item", {
    projectTitle: "GET /books/:id",
    item: json.item
  });
});

app.get("/docs/products/list", (request, response) => {
  response.render("listProduct", {
    projectTitle: "GET /products",
    products: json.products
  });
});

app.get("/docs/products/item", (request, response) => {
  response.render("product", {
    projectTitle: "GET /products/:id",
    product: json.product
  });
});


app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`)
});
