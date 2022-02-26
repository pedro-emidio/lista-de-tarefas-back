const ICrud = require("./interfaces/interfaceCrud");
const Mongoose = require("mongoose");
const Model = require("../schemas/tasks");
const ModelUser = require("../schemas/users");
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
    this._baseURLConnection =
      "mongodb+srv://taskList:taskList@clustertask.zwpwj.mongodb.net/";
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
      await Mongoose.connect(`${this._baseURLConnection}tasks`);
    } catch (error) {
      console.log("ERRO: ", error);
    }
    this._connection = Mongoose.connection;
    this._connection.once("open", () => console.log("Connected"));
    return 200;
  }

  async create(userId, item) {
    try {
      return await Model.create({ ...item, userId: userId });
    } catch (e) {
      return e;
    }
  }

  async read(userId, limit = 10) {
    try {
      return await Model.find({ userId: userId }).limit(limit);
    } catch (e) {
      return e;
    }
  }

  async update(taskId, newTask) {
    try {
      await Model.findOneAndUpdate({ _id: taskId }, { taskContent: newTask });
    } catch (e) {
      return e;
    }
    return 200;
  }

  async delete(TaskId) {
    if (!TaskId) return false;
    try {
      return await Model.deleteOne({ _id: TaskId });
    } catch (e) {
      return e;
    }
  }

  // Gambiarra pra usar outra collection
  async createToUser(userData) {
    try {
      return await ModelUser.create(userData);
    } catch (e) {
      return e;
    }
  }
  async findUser(userData) {
    try {
      console.log(userData);
      return await ModelUser.findOne({ userName: userData });
    } catch (e) {
      return e;
    }
  }
}

module.exports = MongoDB;
