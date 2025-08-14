const Produto = require('../model/Produto')

const cadastrar = async(req,res)=>{
    const valores = req.body
    try{
        const dados = await Produto.create(valores)
        res.status(201).json(dados)
    }catch(err){
        res.status(500).json({message:'Não foi possível cadastrar os dados!'})
        console.error('Não foi possível cadastrar os dados!',err)
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Produto.findAll()
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message:'Não foi possível listar os dados!'})
        console.error('Não foi possível listar os dados!',err)
    }
}

const procurarNome = async(req,res)=>{
    const nome = req.params.nome
    try{
        let dados = await Produto.findOne({where:{titulo:nome}})
        if(dados){
            await Usuario.findByPk(id)
            res.status(200).json(dados)
        }else{
            res.status(404).json({message:'Não foi possível encontrar o id'})
        }
    }catch(err){
        res.status(500).json({message:'Não foi possível cadastrar os dados!'})
        console.error('Não foi possível cadastrar os dados!',err)
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id
    try{
        const dados = await Produto.findByPk(id)
        if(dados){
            await Produto.destroy({where:{id: id}})
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
        let dados = await Produto.findByPk(id)
        if(dados){
            await Produto.update(valores,{where:{id:id}})
            dados = await Produto.findByPk(id)
            res.status(200).json(dados)
        }else{
            res.status(404).json({message:'Não foi possível encontrar o id'})
        }
    }catch(err){
        res.status(500).json({message:'Não foi possível atualizar os dados!'})
        console.error('Não foi possível atualizar os dados!',err)
    }
}

const grafico = async (req,res)=>{
    try{
        const dados = await Produto.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar dados do gráfico!',err)
        res.status(500).json({message: 'Erro ao listar dados do gráfico!'})
    }
}

module.exports = {cadastrar, listar, procurarNome, apagar, atualizar, grafico }