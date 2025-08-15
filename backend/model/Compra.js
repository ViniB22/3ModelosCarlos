const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Compra = db.define('compra',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fk_produto: { 
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'produtos',
            key: 'id'
        }
    },
    fk_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'usuarios',
            key: 'id'
        }
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dataCompra: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    valorUnitario: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    descontoAplicado: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    precoFinal: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: true
    },
    tipoPagamento: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    status:{
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'compras'
})

module.exports = Compra                                                                                                                                                                          