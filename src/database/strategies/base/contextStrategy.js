const ICrud = require("../interfaces/interfaceCrud");

class ContextStrategy extends ICrud {
  constructor(strategy) {
    super();
    ("");
    this._database = strategy;
  }
  connect() {
    return this._database.connect();
  }
  isConnected() {
    return this._database.isConnected();
  }
  create(userId, item) {
    return this._database.create(userId, item);
  }
  read(userId, limit) {
    return this._database.read(userId, limit);
  }
  update(taskId, newTask) {
    return this._database.update(taskId, newTask);
  }
  delete(TaskId) {
    return this._database.delete(TaskId);
  }
  createToUser(userData) {
    return this._database.createToUser(userData);
  }
  findUser(userData) {
    return this._database.findUser(userData);
  }
}

module.exports = ContextStrategy;
