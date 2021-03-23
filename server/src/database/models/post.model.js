const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// setting post schema
const PostSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Users",
  },
  content: {
    type: String,
    required: true,
  },
  file: {
    type: String,
  },
});

// create post model
const postModel = mongoose.model("Posts", PostSchema);

module.exports = postModel;
