notes.md

```
npm i sequelize
npm i pg
```

## Set up Postgres

https://www.robinwieruch.de/postgres-sql-macos-setup

start the postgres database:
pg_ctl -D /usr/local/var/postgres start

stop the postgres database:
pg_ctl -D /usr/local/var/postgres stop


you can run these commands directly from the shell/terminal
there's not a special CLI for them

createdb mydatabasename
dropdb mydatabasename

to enter the special shell do this:

psql mydatabasename

% psql nonexistantdb
2020-11-02 00:37:00.717 PST [43903] FATAL:  database "nonexistantdb" does not exist
psql: error: could not connect to server: FATAL:  database "nonexistantdb" does not exist
% createdb nonexistantdb
% psql nonexistantdb
psql (13.0)
Type "help" for help.


You need to have a user to give sequelize the proper credentials

postgres=# CREATE ROLE patrick WITH LOGIN PASSWORD 'passwordhere'; 
postgres=# ALTER ROLE patrick CREATEDB; 

## Sequelize

https://www.robinwieruch.de/postgres-express-setup-tutorial

```
Lastly, use the created Sequelize instance in your Express application. It connects to the database asynchronously and once this is done you can start your Express application.
```

`
hayk@MacBook-Pro-Hayk-9 sqltutorial % node index.js
(node:47482) ExperimentalWarning: The ESM module loader is experimental.
file:///Users/hayk/node/sqltutorial/src/models/index.js:13
  User: sequelize.import('./user'),
                        ^

TypeError: sequelize.import is not a function
    at file:///Users/hayk/node/sqltutorial/src/models/index.js:13:25
    at ModuleJob.run (internal/modules/esm/module_job.js:110:37)
    at async Loader.import (internal/modules/esm/loader.js:167:24)
`


^ I STOPPED HERE


const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)

Instead of "find by ID" we do "find by pk" (pk = primary key)

findByPk



how to delete the database:

psql trendyoracle

DROP DATABASE trendyoracle;

-------



https://sequelize.org/master/manual/creating-with-associations.html

# Magic Methods

addX etc. are added by calling ".belongsTo" and similar association methods

cat.addOwner()
cat.addOwners()
cat.countOwners()
cat.createOwner()
cat.getOwner()
cat.getOwners()
cat.hasOwner()
cat.hasOwners()
cat.removeOwner()
cat.removeOwners()
cat.setOwner()
owner.addCat()
owner.addCats()
owner.countCats()
owner.createCat()
owner.getCat()
owner.getCats()
owner.hasCat()
owner.hasCats()
owner.removeCat()
owner.removeCats()
owner.setCat()
owner.setCats()

