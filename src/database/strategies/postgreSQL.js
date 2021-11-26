const ICrud = require("./interfaces/interfaceCrud");

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

module.exports = Postgres;
