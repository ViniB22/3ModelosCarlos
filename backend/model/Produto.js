const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Produto = db.define('produto',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING(255),
        allowNull: true
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    preco: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    porcentagemDesconto: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    marca: {
        type: DataTypes.STRING(100),
        allowNull: true
    },
    imagem: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'produtos'
})

module.exports = Produto