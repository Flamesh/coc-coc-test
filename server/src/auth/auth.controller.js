const bcrypt = require("bcrypt");

const userModel = require("../user/user.model");
const authMethod = require("./auth.method");

const dotenv = require("dotenv");
dotenv.config();

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Invalid request" });
    }
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const tokenLife = process.env.TOKEN_LIFE;
    const tokenSecret = process.env.TOKEN_SECRET;

    const dataUserForToken = {
      email: user.email,
    };

    const accessToken = await authMethod.generateToken(
      dataUserForToken,
      tokenSecret,
      tokenLife
    );

    if (!accessToken) {
      return res.status(500).json({ message: "Internal server error" });
    }

    return res.json({
      msg: "Login successfully",
      accessToken,
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  login,
};
