const dotenv = require("dotenv");
dotenv.config();

const tokenSecret = process.env.TOKEN_SECRET;
const authMethod = require("./auth.method");

function getTokenFromHeader(req) {
  if (
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Token") ||
    (req.headers.authorization &&
      req.headers.authorization.split(" ")[0] === "Bearer")
  ) {
    return req.headers.authorization.split(" ")[1];
  }

  return null;
}

const isAuth = async (req, res, next) => {
  const headerAccessToken = getTokenFromHeader(req);
  if (!headerAccessToken) {
    return res.status(400).json({ message: "Invalid request" });
  }

  const verified = await authMethod.verifyToken(headerAccessToken, tokenSecret);

  if (!verified) {
    return res.status(401).json({ message: "Invalid auth" });
  }
  return res.status(200).json({
    message: "Auth success",
    data: {
      iat: verified.iat,
      exp: verified.exp,
    },
  });
};

module.exports = {
  isAuth,
};
