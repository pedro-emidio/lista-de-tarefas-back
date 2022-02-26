const app = require("express")();
const cors = require("cors");

const tasksRoute = require("./routes/task");
const authRouter = require("./routes/authRoutes");
const express = require("express");

app.listen(3002, () => {
  console.log("app running");
});

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
// app.use(cors());
app.use("/task", tasksRoute);
app.use("/auth", authRouter);
