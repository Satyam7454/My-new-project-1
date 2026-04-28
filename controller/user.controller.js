const UserModel = require("../model/user.model");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const body = req.body;
    const user = await UserModel.create(body);
    res.status(200).json({ message: "Signup Successfully" });

    res.status(200).json({ message: "Success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email: email });

    if (!user) return res.status(404).json({ message: "User does not exist" });

    const isLogin = await bcrypt.compare(password, user.password);
    console.log(isLogin);
    if (!isLogin)
      return res.status(401).json({ message: "Incorrect password" });

    res.status(200).json({ message: "Login success" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  signup,
  login,
};
