const Mongoose = require("mongoose");

var Tasks;
try {
  Tasks = Mongoose.model("Tasks");
} catch (e) {
  Tasks = Mongoose.model(
    "Tasks",
    new Mongoose.Schema({
      taskContent: { type: String, require: true },
      isChecked: { type: Boolean, require: true },
      initData: { type: String, require: true },
    })
  );
}

module.exports = Tasks;
