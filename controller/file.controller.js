const FileModel = require("../model/file.model");

const createFile = async (req, res) => {
  try {
    const file = req.file;

    const payload = {
      path: file.destination + file.filename,
      filename: file.filename,
      size: file.size,
      type: file.mimetype.split("/")[0],
    };
    const newFile = await FileModel.create(payload);

    res.status(200).json({ newFile });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const fetchFile = async (req, res) => {
  try {
    const file = await FileModel.find();
    res.status(200).json(file);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createFile,
  fetchFile,
};
