const ContextStrategy = require("./strategies/base/contextStrategy");
const MongoDB = require("./strategies/mongodb");

const contextMongo = new ContextStrategy(new MongoDB());

module.exports = contextMongo;
