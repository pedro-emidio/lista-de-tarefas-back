const { deepEqual, doesNotMatch } = require("assert");

const ContextStrategy = require("../database/strategies/base/contextStrategy");
const MongoDB = require("../database/strategies/mongodb");

const contextMongo = new ContextStrategy(new MongoDB());

const ITEM = {
  taskContent: "LAVAR A LOUÇA",
  isChecked: false,
  initData: "2023-01-05",
};
let ID_TEST = "";

describe("Testing of CRUD operation in mongoDB", function () {
  this.beforeAll(
    "Must connect in mongoDB database",
    async () => await contextMongo.connect()
  );

  it("check if you are connected in mongoDB database", async () => {
    const response = await contextMongo.isConnected();

    const expected = "connected";

    deepEqual(response, expected);
  });

  it("Must create a task in mongoDB database", async () => {
    const { taskContent, isChecked, initData, _id } = await contextMongo.create(
      ITEM
    );
    ID_TEST = _id;
    deepEqual({ taskContent, isChecked, initData }, ITEM);
  });

  it("Must read a task in mongoDB database", async () => {
    const [response] = await contextMongo.read();
    deepEqual(typeof response, "object");
  });

  it("Must update a task in mongoDB database", async () => {
    const newValue = "Trocar roupa de cama.";
    const response = await contextMongo.update(ID_TEST, newValue);

    deepEqual(response, 200);
  });

  it("Must remove a task in mongoDB database", async () => {
    const response = await contextMongo.delete(ID_TEST);
    deepEqual(response.deletedCount, 1);
  });

  it("Must get false if task id is not passed", async () => {
    const response = await contextMongo.delete();
    deepEqual(response, false);
  });
});
