const articleModel = require("../models/article.js");

exports.getArticles = async (req, res) => {
  const article = await articleModel.find();

  res.status(200).json({ article });
};

exports.addArticle = async (req, res) => {
  const { nama_artikel, jenis_artikel } = req.body;

  if (!nama_artikel || !jenis_artikel) {
    res.status(400).json({
      errorMessage: "nama artikel and jenis artikel is required",
    });

    return;
  }
  const newArticleModel = new articleModel({
    nama_artikel: nama_artikel,
    jenis_artikel: jenis_artikel,
  });

  const newItem = await newArticleModel.save();

  res.status(201).json({
    message: "Item successfully added!",
    created: newItem,
  });
};

exports.updateArticle = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  if (!body.nama_artikel || !body.jenis_artikel) {
    res.status(400).json({
      errorMessage: "nama artikel and jenis artikel is required",
    });

    return;
  }

  const updatedArticle = await articleModel.findOneAndUpdate({ _id: id }, body);

  if (!updatedArticle) {
    res.status(400).json({
      errorMessage: "Edit article failed. Not implemented",
    });

    return;
  }
  res.status(200).json({
    message: "article successfully edited",
  });
};

exports.removeArticle = async (req, res) => {
  const id = req.params.id;

  const removedArticle = await articleModel.findOneAndDelete({ _id: id });

  if (!removedArticle) {
    res.status(400).json({
      errorMessage: "Remove article failed. Not implemented",
    });

    return;
  }

  res.status(200).json({
    message: "article successfully removed",
  });
};

exports.removeAllArticle = async (req, res) => {
  const removedArticle = await articleModel.deleteMany({});

  if (!removedArticle) {
    res.status(400).json({
      errorMessage: "Remove article failed. Not implemented",
    });

    return;
  }

  res.status(200).json({
    message: "article successfully removed",
  });
};
