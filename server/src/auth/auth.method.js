const jwt = require("jsonwebtoken");
const promisify = require("util").promisify;

const sign = promisify(jwt.sign).bind(jwt);

const generateToken = async (payload, secretSignature, life) => {
  try {
    return await sign(
      {
        payload,
      },
      secretSignature,
      {
        algorithm: "HS256",
        expiresIn: life,
      }
    );
  } catch (e) {
    console.log(e);
    return null;
  }
};

module.exports = {
  generateToken,
};
