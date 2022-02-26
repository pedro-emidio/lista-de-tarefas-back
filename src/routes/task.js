const { Router } = require("express");
const {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskActions");

const { autentica } = require("../controllers/taskActions");

const TaskRouter = Router();

TaskRouter.post("/create", autentica, createTask, (request, response) => {
  response.json({ httpStatus: 200 });
});

TaskRouter.get("/list", autentica, listTasks, (request, response) => {
  // response.json({ httpStatus: 200 });
});

TaskRouter.delete("/delete", autentica, deleteTask, (request, response) => {
  response.json({ httpStatus: 200 });
});

TaskRouter.put("/update", autentica, updateTask, (request, response) => {
  response.json({ httpStatus: 200 });
});

module.exports = TaskRouter;
