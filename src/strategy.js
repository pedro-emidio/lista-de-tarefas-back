class NotImplementedException extends Error {
  constructor() {
    super("Not Implemented Exception");
  }
}

class ICrud {
  create(item) {
    throw new NotImplementedException();
  }

  read(query) {
    throw new NotImplementedException();
  }

  update(id, tem) {
    throw new NotImplementedException();
  }

  delete(id) {
    throw new NotImplementedException();
  }
}

class MongoDB extends ICrud {
  constructor() {
    super();
  }
  create(item) {
    console.log("Insert your method of the 'create' to mongodb ");
  }
  read(item) {
    console.log("Insert your method of the 'read' to mongodb ");
  }
  update(id, item) {
    console.log("Insert your method of the 'update' to mongodb ");
  }
  delete(id) {
    console.log("Insert your method of the 'delete' to mongodb ");
  }
}

class Postgres extends ICrud {
  constructor() {
    super();
  }
  create(item) {
    console.log("Insert your method of the 'create' to Postgres ");
  }
  read(item) {
    console.log("Insert your method of the 'read' to Postgres ");
  }
  update(id, item) {
    console.log("Insert your method of the 'update' to Postgres ");
  }
  delete(id) {
    console.log("Insert your method of the 'delete' to Postgres ");
  }
}

class ContextStrategy {
  constructor(strategy) {
    this._database = strategy;
  }

  create(item) {
    return this._database.create(item);
  }
  read(item) {
    return this._database.read(item);
  }
  update(id, item) {
    return this._database.update(id, item);
  }
  delete(id) {
    return this._database.delete(id);
  }
}

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create();
contextMongo.read();
contextMongo.update();
contextMongo.delete();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();
contextPostgres.read();
contextPostgres.update();
contextPostgres.delete();
