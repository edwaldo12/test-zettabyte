// membuat schema
const mongoose = require("mongoose");

const Comment = mongoose.model("comment", {
  nama_comment: {
    type: String,
    required: true,
  },
  jenis_comment: {
    type: String,
    required: true,
  },
});

module.exports = Comment;
