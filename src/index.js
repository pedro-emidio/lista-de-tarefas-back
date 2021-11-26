const ContextStrategy = require("./database/strategies/base/contextStrategy");
const MongoDB = require("./database/strategies/mongodb");
const Postgres = require("./database/strategies/postgreSQL");

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
