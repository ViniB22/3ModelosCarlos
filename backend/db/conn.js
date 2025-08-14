require('dotenv').config()  
const { Sequelize} = require('sequelize')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
})

sequelize.authenticate()

.then(() => {
    console.log('Conexão com banco de dados realizada com sucesso!');
})
.catch((err) => {
    console.log(dbUser, dbPass, dbName, dbHost)
    console.error('Não foi possível conectar com o banco de dados!' , err);
});
module.exports = sequelize