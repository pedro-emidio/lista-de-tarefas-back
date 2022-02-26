const { Router } = require("express");
const { login, createUser } = require("../controllers/authMethods");

const jwt = require("jsonwebtoken");

const authRouter = Router();

authRouter.get("/login", login);

authRouter.post("/create", createUser, async (request, response) => {});

module.exports = authRouter;
