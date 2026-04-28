const FileModel = require("../model/file.model");

const createFile = (req, res) => {
  try {
    console.log(req.file);
    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createFile,
};
