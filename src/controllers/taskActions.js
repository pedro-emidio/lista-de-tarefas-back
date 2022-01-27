const db = require("../database/connection");

async function createTask(request, response, next) {
  try {
    await db.connect();
    await db.create(request.query);
  } catch (e) {
    return e;
  }
  next();
}

async function deleteTask(request, response, next) {
  try {
    await db.connect();
    await db.delete(request.query.id);
  } catch (e) {
    return e;
  }
  next();
}

async function listTasks(request, response, next) {
  try {
    await db.connect();
    const tasks = await db.read();
    request.tasks = tasks;
  } catch (e) {
    return e;
  }
  next();
}

async function updateTask(request, response, next) {
  const { id, newTaskValue } = request.query;
  try {
    await db.connect();
    await db.update(id, newTaskValue);
  } catch (e) {
    return e;
  }
  next();
}
module.exports = { createTask, listTasks, updateTask, deleteTask };
