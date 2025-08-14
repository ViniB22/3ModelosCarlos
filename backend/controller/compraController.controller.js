const Compra = require('../model/Compra')

const cadastrar = async(req,res)=>{
    const valores = req.body
    try{
        const dados = await Compra.create(valores)
        res.status(201).json(dados)
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
            await Compra.update(valores,{where:{id:id}})
            dados = await Compra.findByPk(id)
            res.status(200).json(dados)
        }else{
            res.status(404).json({message:'Não foi possível encontrar o id'})
        }
    }catch(err){
        res.status(500).json({message:'Não foi possível atualizar os dados!'})
        console.error('Não foi possível atualizar os dados!',err)
    }
}

module.exports = {cadastrar, listar, apagar, atualizar}