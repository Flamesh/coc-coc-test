const express = require("express");
const authMiddleware = require("./auth.middlewares");
const router = express.Router();

const isAuth = authMiddleware.isAuth;

const authController = require("./auth.controller");
router.post("/login", authController.login);
router.get("/test-auth", isAuth);

module.exports = router;
