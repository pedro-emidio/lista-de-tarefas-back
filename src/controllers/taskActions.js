const db = require("../database/connection");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

async function autentica(request, response, next) {
  try {
    dotenv.config();
    const bearerToken = request.headers.authorization.split(" ")[1];
    const userData = jwt.verify(bearerToken, process.env.JWT_TOKEN);
    request.userId = userData.id;
    next();
  } catch (error) {
    console.log(error);
    return response.status(401).json({ message: "Não autorizado" });
  }
}

async function createTask(request, response, next) {
  try {
    await db.connect();
    await db.create(request.userId, request.body);
  } catch (e) {
    return e;
  }
  next();
}

async function deleteTask(request, response, next) {
  try {
    await db.connect();
    await db.delete(request.query.taskId);
  } catch (e) {
    return e;
  }
  next();
}

async function listTasks(request, response, next) {
  try {
    await db.connect();
    const tasks = await db.read(request.userId);
    response.json({ taskList: tasks });
  } catch (e) {
    return e;
  }
  next();
}

async function updateTask(request, response, next) {
  try {
    await db.connect();
    await db.update(request.body.taskId, request.body.newTask);
  } catch (e) {
    return e;
  }
  next();
}
module.exports = { createTask, listTasks, updateTask, deleteTask, autentica };
