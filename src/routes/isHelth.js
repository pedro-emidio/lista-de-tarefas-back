const { Router } = require("express");

const TaskRouter = Router();

TaskRouter.get("/isHelth", (request, response) => {
  console.log("BACK-END IS HELTH");
  response.status(200);
});

module.exports = TaskRouter;
