const knex = require('knex')({
    client:'mysql',
    connection: {
        host: "localhost" || process.env.BD_HOST,
        user: "root" || process.env.BD_USER,
        password:  "" || process.env.BD_PASSWORD,
        database: "proyecto"|| process.env.BD_DB,
        port: 3307,
        pool : {min : 1, max : 10}
    }
});

module.exports = knex;
