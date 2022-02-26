const db = require("../database/connection");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

async function createUser(request, response, next) {
  try {
    const userData = request.query;
    await db.connect();
    await db.createToUser(userData);
  } catch (e) {
    return e;
  }
  next();
}

async function auth(userName, id) {
  try {
    dotenv.config();
    const token = process.env.JWT_TOKEN;
    return jwt.sign({ userName, id }, token);
  } catch (error) {
    console.log(error);
  }
}

async function login(request, response) {
  try {
    const { userName, password } = request.query;
    // find user in the bank
    await db.connect();
    const userData = await db.findUser(userName.toLowerCase());
    // valida informações do usuário
    if (!userData)
      return response.status(401).json({ message: "Usuário não encontrado" });

    if (password !== userData.password) {
      console.log("Acesso negado");
      return response
        .status(401)
        .json({ message: "Username ou senha não encontrado" });
    }

    // cria jwt
    const jwtToken = await auth(userName, userData._id);
    return response.status(200).json({ token: jwtToken });
  } catch (error) {
    console.log(error);
    return;
  }
}

module.exports = { createUser, login };
