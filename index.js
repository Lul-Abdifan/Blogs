const express = require("express");
const app = new express();
const path = require("path");
const ejs = require('ejs');
app.set('view engine','ejs');
app.use(express.static("public"));
app.listen(9000, () => {
  console.log("App listening on port 4000");
});
app.get("/", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "front/index.html"));
  res.render('index')
});
app.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "front/about.html"));
  res.render('about')
});
app.get("/post", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "front/post.html"));
  res.render('post')
});
app.get("/contact", (req, res) => {
  // res.sendFile(path.resolve(__dirname, "front/contact.html"));
  res.render('contact')
});
