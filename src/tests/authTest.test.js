const { deepEqual } = require("assert");
const { assert } = require("console");
const { PassThrough } = require("stream");
const app = require("express")();

describe("Auth test suite", function () {
  this.beforeAll("run application", async () => {
    app.listen(3005, () => {
      console.log("app of the test running");
    });
  });

  it("Must get a JWT token", async () => {
    const response = await app.inject({
      method: "POST",
      url: "/",
      payload: { username: "pedroemidio", password: "123456" },
    });
    const statusCode = response.statusCode;
    const data = JSON.parse(response.payload);
    assert.deepEqual(statusCode, 200);
    assert.ok(data.token.legth > 10);
  });
});
