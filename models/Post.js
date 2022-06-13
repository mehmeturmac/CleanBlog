const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const PostSchema = new Schema({
  name: String,
  message: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
