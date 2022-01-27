const { Router } = require("express");
const {
  createTask,
  listTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskActions");

const TaskRouter = Router();

TaskRouter.post("/create", createTask, (request, response) => {
  response.json({ httpStatus: 200 });
});

TaskRouter.get("/list", listTasks, (request, response) => {
  response.json({ tasks: request.tasks });
});

TaskRouter.delete("/delete", deleteTask, (request, response) => {
  response.json({ httpStatus: 200 });
});

TaskRouter.put("/update", updateTask, (request, response) => {
  response.json({ httpStatus: 200 });
});

module.exports = TaskRouter;
