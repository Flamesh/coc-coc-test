const bcrypt = require("bcrypt");

const userModel = require("../user/user.model");
const authMethod = require("./auth.method");

const dotenv = require("dotenv");
dotenv.config();
const tokenLife = process.env.TOKEN_LIFETIME;
const tokenSecret = process.env.TOKEN_SECRET;

const login = async (req, res) => {
  try {
    if (!req.body.email || !req.body.password) {
      return res.status(400).json({ message: "Invalid request" });
    }
    const email = req.body.email;
    const password = req.body.password;

    const user = await userModel.getUserByEmail(email);

    if (!user) {
      return res.status(400).json({ message: "User not found", code: 400 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: "Account information incorrect", code: 401 });
    }

    const dataUserForToken = {
      email: user.email,
    };

    const accessToken = await authMethod.generateToken(
      dataUserForToken,
      tokenSecret,
      tokenLife
    );

    if (!accessToken) {
      return res
        .status(500)
        .json({ message: "Internal server error", code: 500 });
    }

    return res.json({
      msg: "Login successfully",
      code: 200,
      data: {
        accessToken,
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (e) {
    return res
      .status(500)
      .json({ message: "Internal server error", code: 500 });
  }
};

module.exports = {
  login,
};
