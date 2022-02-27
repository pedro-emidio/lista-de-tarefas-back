const app = require("express")();
const cors = require("cors");

const tasksRoute = require("./routes/task");
const authRouter = require("./routes/authRoutes");
const isHelth = require("./routes/isHelth");

const express = require("express");

app.listen(3002, () => {
  console.log("app running");
});

app.use(express.json());

// To local test
// app.use(cors({ origin: "http://localhost:3000" }));

// To deploy
app.use(cors({ origin: "https://lista-de-tarefas-eta.vercel.app/" }));
app.use("/task", tasksRoute);
app.use("/auth", authRouter);
