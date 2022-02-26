class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception");
  }
}

class ICrud {
  connect() {
    throw new NotImplementedException();
  }
  isConnected() {
    throw new NotImplementedException();
  }
  create(userId, item) {
    throw new NotImplementedException();
  }

  read(userId, limit) {
    throw new NotImplementedException();
  }

  update(taskId, newTask) {
    throw new NotImplementedException();
  }

  delete(TaskId) {
    throw new NotImplementedException();
  }

  createToUser(userData) {
    throw new NotImplementedException();
  }
  findUser(userData) {
    throw new NotImplementedException();
  }
}

module.exports = ICrud;
