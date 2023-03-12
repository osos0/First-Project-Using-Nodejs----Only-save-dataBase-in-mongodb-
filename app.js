const express = require("express");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
const Blog = require("./models/modelSchema1");

// mongoose is conecting here and we cuted the code pelow and put it in then
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://First_project:First_project@cluster0.0jujmcc.mongodb.net/all-data?retryWrites=true&w=majority"
  )
  .then((res) => {
    app.listen(port, () => {
      console.log(`Example app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("link To /html");
});

app.get("/html", (req, res) => {
  res.render("index");
});

app.get("/add0new-box", (req, res) => {
  res.render("index-new");
});

// app.listen(port, () => {
//   console.log(`Example app listening on port http://localhost:${port}`);
// });

//post req
app.post("/html", (req, res) => {
  const boxs = new Blog(req.body);
  // console.log(req.body);
  boxs
    .save()
    .then((result) => {
      res.redirect("/html");
    })
    .catch((err) => {
      clg(err);
    });
});
