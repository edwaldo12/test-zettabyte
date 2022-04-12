const apiRouter = require("./api.js");

const express = require("express");

const router = express.Router({
  caseSensitive: true,
});

router.use("/api", apiRouter);

module.exports = router;
