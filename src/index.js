const app = require("express")();
const tasksRoute = require("./routes/task");
const cors = require("cors");

app.listen(3002, () => {
  console.log("app running");
});

app.use(cors({ origin: "http://localhost:3000" }));
// app.use(cors());
app.use("/task", tasksRoute);
