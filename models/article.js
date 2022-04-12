// membuat schema
const mongoose = require("mongoose");

const Article = mongoose.model("article", {
  nama_artikel: {
    type: String,
    required: true,
  },
  jenis_artikel: {
    type: String,
    required: true,
  },
});

module.exports = Article;
