# Projeto multi bancos de dados com nodejs

## Sobre

O Objetivo deste repositório é deixar disponível um conjunto de scripts capazes de tornar um projeto qualquer flexível na escolha do banco de dados. Os scripts dão a opção de que se escolha dois entre dois (mais bancos podem ser facilmente implementados nos scripts) bancos de dados, `Mongdb` e `PostgreSQL`.

## Dependências

- `Node`
- `Docker`

Para tornar mais fácil o provisionamento do ambiente e a conexão do banco de dados, será utilizado o imagens `Docker`. A seguir os comando necessários para a execução do contêiner de `Mongdb` e `PostgreSQL`.

### PostgreSQL

```docker
# Executando o contêiner de PostgreSQL
docker run \
 --name postgres \
 -e POSTGRES_USER=admin \
 -e POSTGRES_PASSWORD=senha \
 -e POSTGRES_DB=heroes \
 -p 5432:5432 \
 -d \
 postgres

# O Contêiner do Client do PostgreSQL
docker run \
 --name adminer \
 -p 8080:8080 \
 --link postgres:postgres \
 -d \
 adminer
```

> Ao executar os comandos acima, o `Adminer` estará disponível em `localhost:8080`. O servidor, usuário, senha e banco estão definidos no comando acima

### Mongodb

```docker
# Executando o contêiner do mongodb
docker run \
--name mongodb \
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=senha \
-d \
mongo:4

# Executando o mongodb client
docker run \
--name mongoclient \
-p 3000:3000 \
--link mongodb:mongodb \
-d \
mongoclient/mongoclient

# Criando um usuário do banco para a conexão no mongo client
docker exec -it mongodb \
 mongo --host localhost -u admin -p senha --authenticationDatabase admin \
 --eval "db.getSiblingDB('heroes').createUser({user: 'admin', pwd: 'senha', roles: [{role: 'readWrite', db: 'heroes'}]})"
```

> Ao executar os comando acima, o `mongo client` estará disponível em `localhost:3000`. Para criar uma conexão click em `connect` > `create new` > preencha `host/port (27017)` e `databasename`. Na área de `authentication` > `Scram-Sha-1` e preencha `Username`, `Password` e `Authentication DB`, conforme os parâmetros passados no comando acima.

## Multi bacos

Os scripts dão duas opções de estratégias de banco de dados, você pode facilmente utilizar o `mongodb` ou o `postgresql` passando apenas as classes `MongoDB` ou `Postgres` ao instanciar um novo objeto com a classe `ContextStrategy`. Desse modo é simples escolher qual banco de dados utilizar.

```jsx
// Para utilizar o Mongdb
const contextMongo = new ContextStrategy(new MongoDB());

// Para utilizar o PostgreSQL
const contextPostgres = new ContextStrategy(new Postgres());
```

### CRUD

Os métodos de criação, leitura, atualizar e apagar estão no diretório `multiBanco/src/database/` nos arquivos `mongodb.js` e `postgreSQL.js`, respectivamente. Os métodos estão em aberto com o objetivo de flexibiliza-los de acordo com as regras do projeto.

> Caso um método seja chamado sem ser criado, será levantado um erro `NotImplementedException`, para corrigi-lo basta criar a assinatura do método em arquivos `mongodb.js` ou `postgreSQL.js`.
