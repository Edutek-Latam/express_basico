const { Sequelize} = require('sequelize')
const {envs } = require('./env');


module.exports = db = {};


async  function initDB(){
    const sequelize = new Sequelize(envs.DBNAME, envs.DBUSER, envs.DBPWD, {
        host: 'localhost',
        dialect:'mariadb', /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
        logging: true
      });

     sequelize.authenticate()
     .then(()=>{
        db.sequelize = sequelize;
        db.User = require('../usuarios/usuarios.model')(sequelize);
     });

     //await sequelize.sync({alter: true});
     //await sequelize.sync({force:true});
  }


  initDB();