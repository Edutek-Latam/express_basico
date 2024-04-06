require('dotenv').config()
const env = require('env-var');

const envs = {
    PORT: env.get('PORT').required().asPortNumber(),
    DBHOST: env.get('DBHOST').required().asString(),
    DBUSER:env.get('DBUSER').required().asString(),
    DBPWD:env.get('DBPWD').required().asString(),
    DBNAME:env.get('DBNAME').required().asString(),
}

module.exports = { envs }