const ICrud = require("./interfaces/interfaceCrud");
const Mongoose = require("mongoose");
const Model = require("../schemas/tasks");
const { ObjectId } = Mongoose.Schema;

const STATUS = {
  0: "disconnected",
  1: "connected",
  2: "connecting",
  3: "disconnecting",
};

class MongoDB extends ICrud {
  constructor() {
    super();
    this._connection = null;
  }
  async isConnected() {
    const state = STATUS[this._connection.readyState];
    if (state === "connected") return state;
    if (state !== "connecting") return state;

    await new ((resolve) => setTimeout(resolve, 1000))();

    return;
  }

  async connect() {
    try {
      await Mongoose.connect(
        "mongodb+srv://taskList:taskList@clustertask.zwpwj.mongodb.net/tasks"
      );
    } catch (error) {
      console.log("ERRO: ", error);
    }
    this._connection = Mongoose.connection;
    this._connection.once("open", () => console.log("Connected"));
    return 200;
    // return this._connection;
  }

  async create(item) {
    try {
      return await Model.create(item);
    } catch (e) {
      return e;
    }
  }

  async read(limit = 10) {
    try {
      return await Model.find().limit(limit);
    } catch (e) {
      return e;
    }
  }

  async update(id, task) {
    const newValue = { taskContent: task };
    try {
      await Model.findByIdAndUpdate(id, newValue);
    } catch (e) {
      return e;
    }
    return 200;
  }
  async delete(id) {
    if (!id) return false;
    const query = { _id: id };
    try {
      return await Model.deleteOne(query);
    } catch (e) {
      return e;
    }
  }
}

module.exports = MongoDB;
