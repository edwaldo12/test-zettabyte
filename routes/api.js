const express = require("express");
const router = express.Router({
  caseSensitive: true,
});

const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const {
  getArticles,
  addArticle,
  updateArticle,
  removeArticle,
  removeAllArticle,
} = require("../controllers/articleController");
const {
  getComment,
  addComment,
  updateComment,
  removeComment,
  removeAllComment,
} = require("../controllers/commentController");

router.get("/articles", getArticles);
router.post("/article", jsonParser, addArticle);
router.put("/article/:id", jsonParser, updateArticle);
router.delete("/article/:id", removeArticle);
router.delete("/article", removeAllArticle);

router.get("/comments", getComment);
router.post("/comment", jsonParser, addComment);
router.put("/comment/:id", jsonParser, updateComment);
router.delete("/comment/:id", removeComment);
router.delete("/comment", removeAllComment);

module.exports = router;
