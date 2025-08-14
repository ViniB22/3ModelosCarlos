const Usuario = require('../model/Usuario')

const cadastrar = async(req,res)=>{
    const valores = req.body
    try{
        const dados = await Usuario.create(valores)
        res.status(201).json(dados)
    }catch(err){
        res.status(500).json({message:'Não foi possível cadastrar os dados!'})
        console.error('Não foi possível cadastrar os dados!',err)
    }
}

const listar = async(req,res)=>{
    try{
        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){
        res.status(500).json({message:'Não foi possível listar os dados!'})
        console.error('Não foi possível listar os dados!',err)
    }
}

const procurarId = async (req, res) => {
    const id = req.params.id
    try {
        let dados = await Usuario.findByPk(id)
        if (dados) {
            res.status(200).json(dados)
        } else {
            res.status(404).json({ message: 'Não foi possível encontrar o id' })
        }
    } catch (err) {
        res.status(500).json({ message: 'Não foi possível buscar os dados!' })
        console.error('Erro ao buscar os dados!', err)
    }
}

const apagar = async(req,res)=>{
    const id = req.params.id
    try{
        let dados = await Usuario.findByPk(id)
        if(dados){
            dados = await Usuario.findByPk(id)
            await Usuario.destroy({where:{id: id}})
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
        let dados = await Usuario.findByPk(id)
        if(dados){
            await Usuario.update(valores,{where:{id:id}})
            dados = await Usuario.findByPk(id)
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
        const dados = await Usuario.findAll()
        res.status(200).json(dados)
    }catch(err){
        console.error('Erro ao listar dados do gráfico!',err)
        res.status(500).json({message: 'Erro ao listar dados do gráfico!'})
    }
}

module.exports = {cadastrar, listar, procurarId, apagar, atualizar, grafico}