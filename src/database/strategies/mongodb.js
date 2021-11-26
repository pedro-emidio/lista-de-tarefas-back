const ICrud = require("./interfaces/interfaceCrud");

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

module.exports = MongoDB;
