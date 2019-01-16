// Load and initialize bluebird
let promise = require('bluebird');


// Related to Bluebird
const initOptions = {
    promiseLib: promise,
};

// setting up configuration to link to database
const config = {
    host: 'localhost',
    port: 5432,
    database: 'blogs',
    user: 'postgres'
}

// Load and initialize pg-promise
const pgp = require('pg-promise')(initOptions);

// Creaate the database instance:
const db  = pgp(config);

//Connecting db to app.js
module.exports = db;