const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuario',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    primeiroNome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    ultimoNome: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    idade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATE,
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'usuarios'
})

module.exports = Usuario