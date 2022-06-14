const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const ejs = require("ejs");
const Post = require("./models/Post");
const pageControllers = require("./controllers/pageControllers");
const postControllers = require("./controllers/postControllers");

const app = express();

//CONNECT DB
mongoose.connect(
  "mongodb+srv://mehmeturmac:HpWeRMqzSOEaExKv@cluster0.k6zxgsp.mongodb.net/cleanblog-db?retryWrites=true&w=majority"
);

//TEMPLATE ENGINE
app.set("view engine", "ejs");

//MIDDLEWARES
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

//ROUTES
app.get("/", postControllers.getAllPost);
app.get("/posts/:id", postControllers.getPost);
app.post("/posts", postControllers.createPost);
app.put("/posts/:id", postControllers.updatePost);
app.delete("/posts/:id", postControllers.deletePost);

app.get("/about", pageControllers.getAboutPage);
app.get("/add_post", pageControllers.getAddPage);
app.get("/posts/edit_post/:id", pageControllers.getEditPage);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
