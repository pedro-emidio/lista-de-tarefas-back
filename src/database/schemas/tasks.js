const Mongoose = require("mongoose");
const { ObjectId } = Mongoose.Schema;

var Tasks;
try {
  Tasks = Mongoose.model("Tasks");
} catch (e) {
  Tasks = Mongoose.model(
    "Tasks",
    new Mongoose.Schema({
      userId: { type: ObjectId, refer: "Users", required: true },
      taskContent: { type: String, require: true },
      isChecked: { type: Boolean, require: true },
      initData: { type: String, require: true },
    })
  );
}

module.exports = Tasks;
