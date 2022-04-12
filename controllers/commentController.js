const commentModel = require("../models/comment.js");

exports.getComment = async (req, res) => {
  const Comment = await commentModel.find();

  res.status(200).json({ Comment });
};

exports.addComment = async (req, res) => {
  const { nama_comment, jenis_comment } = req.body;

  if (!nama_comment || !jenis_comment) {
    res.status(400).json({
      errorMessage: "nama comment and jenis comment is required",
    });

    return;
  }
  const newcommentModel = new commentModel({
    nama_comment: nama_comment,
    jenis_comment: jenis_comment,
  });

  const newComment = await newcommentModel.save();

  res.status(201).json({
    message: "Comment successfully added!",
    created: newComment,
  });
};

exports.updateComment = async (req, res) => {
  const {
    params: { id },
    body,
  } = req;

  if (!body.nama_comment || !body.jenis_comment) {
    res.status(400).json({
      errorMessage: "nama comment and jenis comment is required",
    });

    return;
  }

  const udpatedComment = await commentModel.findOneAndUpdate({ _id: id }, body);

  if (!udpatedComment) {
    res.status(400).json({
      errorMessage: "Edit Comment failed. Not implemented",
    });

    return;
  }
  res.status(200).json({
    message: "Comment successfully edited",
  });
};

exports.removeComment = async (req, res) => {
  const id = req.params.id;

  const removedComment = await commentModel.findOneAndDelete({ _id: id });

  if (!removedComment) {
    res.status(400).json({
      errorMessage: "Remove Comment failed. Not implemented",
    });

    return;
  }

  res.status(200).json({
    message: "Comment successfully removed",
  });
};

exports.removeAllComment = async (req, res) => {
  const removedComment = await commentModel.deleteMany({});

  if (!removedComment) {
    res.status(400).json({
      errorMessage: "Remove Comment failed. Not implemented",
    });

    return;
  }

  res.status(200).json({
    message: "Comment successfully removed",
  });
};
