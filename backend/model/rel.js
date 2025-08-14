const Produto = require('./Produto')
const Usuario = require('./Usuario')
const Compra = require('./Compra')

Produto.hasMany(Compra,{
    foreignKey: 'fk_produto',
    as: 'compraProd',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Produto,{
    foreignKey: 'fk_produto',
    as: 'produtoComp',
    allowNull: false
})
Usuario.hasMany(Compra,{
    foreignKey: 'fk_usuario',
    as: 'compraUser',
    onDelete: 'CASCADE'
})

Compra.belongsTo(Usuario,{
    foreignKey: 'fk_usuario',
    as: 'UsuarioComp',
    allowNull: false
})