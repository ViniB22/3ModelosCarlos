const Compra = require('../model/Compra')
const Produto = require('../model/Produto')
const Usuario = require('../model/Usuario')

const cadastrar = async(req,res)=>{
    const valores = req.body
    console.log(valores)

    try{
        let produto = await Produto.findByPk(valores.fk_produto)

        if(produto === null){
            res.status(404).json({message:'Não foi possível encontrar o id'})
        }else{
            let valorUnitario = produto.preco
            let descontoAplicado = produto.porcentagemDesconto 
            let estoqueNovo = produto.estoque
            
            let quantidade = valores.quantidade
            let precoSemDesconto = 0
            let precoFinal = 0
    
            if(valores.quantidade > produto.estoque){
                res.status(422).json({message: "quantidade insuficiente de produto"}) // ajustar
            }else{
                estoqueNovo = estoqueNovo - valores.quantidade 
                precoSemDesconto = (quantidade * valorUnitario)
                precoFinal = precoSemDesconto - ((precoSemDesconto * descontoAplicado) / 100)

                const prodAtu = {
                    titulo: produto.titulo,
                    descricao: produto.descricao,
                    categoria: produto.categoria,
                    preco: produto.preco,
                    porcentagemDesconto: produto.porcentagemDesconto,
                    estoque: estoqueNovo,
                    marca: produto.marca,
                    imagem: produto.imagem
                }

                await Produto.update(prodAtu,{where:{id:produto.id}})

                const compraVal = {
                    fk_produto: valores.fk_produto,
                    fk_usuario: valores.fk_usuario,
                    quantidade: valores.quantidade,
                    dataCompra: valores.dataCompra,
                    valorUnitario: produto.preco,
                    descontoAplicado: produto.porcentagemDesconto,
                    precoFinal: precoFinal,
                    tipoPagamento: valores.tipoPagamento,
                    status: valores.status
                }

                const dados = await Compra.create(compraVal)
                res.status(201).json(dados)
            }
        }
    }catch(err){
        res.status(500).json({message:'Não foi possível cadastrar os dados!'})
        console.error('Não foi possível cadastrar os dados!',err)
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Compra.findAll()
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message:'Não foi possível listar os dados!'})
        console.error('Não foi possível listar os dados!',err)
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id
    try{
        const dados = await Compra.findByPk(id)
        if(dados){
            await Compra.destroy({where:{id: id}})
            res.status(204).json({message:'Dados Apagados'})
        }else{
            res.status(404).json({message:'Não foi possível encontrar o id'})
        }
    }catch(err){
        res.status(500).json({message:'Não foi possível apagar os dados!'})
        console.error('Não foi possível apagar os dados!',err)
    }
}

const atualizar = async(req,res)=>{
    const id = req.params.id
    const valores = req.body
    try{
        let dados = await Compra.findByPk(id)
        if(dados){
            let produto = await Produto.findByPk(valores.fk_produto)

            if(produto === null){
                res.status(404).json({message:'Não foi possível encontrar o id'})
            }else{
                let valorUnitario = produto.preco
                let descontoAplicado = produto.porcentagemDesconto 
                let estoqueNovo = produto.estoque
                
                let quantidade = valores.quantidade
                let precoSemDesconto = 0
                let precoFinal = 0
        
                if(valores.quantidade > produto.estoque){
                    res.status(422).json({message: "quantidade insuficiente de produto"}) // ajustar
                }else{
                    estoqueNovo = estoqueNovo - valores.quantidade 
                    precoSemDesconto = (quantidade * valorUnitario)
                    precoFinal = precoSemDesconto - ((precoSemDesconto * descontoAplicado) / 100)
                    
                    const prodAtu = {
                        titulo: produto.titulo,
                        descricao: produto.descricao,
                        categoria: produto.categoria,
                        preco: produto.preco,
                        porcentagemDesconto: produto.porcentagemDesconto,
                        estoque: estoqueNovo,
                        marca: produto.marca,
                        imagem: produto.imagem
                    }
                
                    await Produto.update(prodAtu,{where:{id:produto.id}})
                
                    const compraVal = {
                        fk_produto: valores.fk_produto,
                        fk_usuario: valores.fk_usuario,
                        quantidade: valores.quantidade,
                        dataCompra: valores.dataCompra,
                        valorUnitario: produto.preco,
                        descontoAplicado: produto.porcentagemDesconto,
                        precoFinal: precoFinal,
                        tipoPagamento: valores.tipoPagamento,
                        status: valores.status
                    }
                
                    await Compra.update(compraVal,{where:{id:id}})
                    dados = await Compra.findByPk(id)
                    res.status(200).json(dados)
                }
            }
        }else{
            res.status(404).json({message:'Não foi possível encontrar o id'})
        }
    }catch(err){
        res.status(500).json({message:'Não foi possível atualizar os dados!'})
        console.error('Não foi possível atualizar os dados!',err)
    }
}

module.exports = {cadastrar, listar, apagar, atualizar}