let res = document.getElementById("res")
let resLote = document.getElementById("resLote")
let cadastrar = document.getElementById("cadastrar")
let cadastrarLote = document.getElementById("cadastrarLote")

cadastrar.addEventListener("click", (e)=>{
    e.preventDefault()

    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let categoria = document.getElementById("categoria").value
    let preco = document.getElementById("preco").value
    let porcentagemDesconto = document.getElementById("porcentagemDesconto").value
    let estoque = document.getElementById("estoque").value
    let marca = document.getElementById("marca").value
    let imagem = document.getElementById("imagem").value

    const valores = {
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        preco: preco,
        porcentagemDesconto: porcentagemDesconto,
        estoque: estoque,
        marca: marca ? marca : "Sem marca registrada",
        imagem: imagem
    }

    fetch('http://localhost:3000/produto', {
        method: "POST",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then((dados)=>{
        res.innerHTML = `Nome do Produto: ${dados.titulo} <br>
        Descrição: ${dados.descricao} <br>
        Categoria: ${dados.categoria} <br>
        Preço: R$ ${dados.preco} <br>
        Porcentagem de Desconto: ${dados.porcentagemDesconto}%  <br>
        Estoque: ${dados.estoque} <br>
        Marca: ${dados.marca} <br>
        Imagem: <img src="${dados.imagem}">`
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})

cadastrarLote.addEventListener("click", (e)=>{
    e.preventDefault()

    fetch("https://dummyjson.com/products",{
        method: "GET",
        headers: { "content-type":"application/json" }
    })
    .then(resp => resp.json())
    .then(dados=> {
        dados.products.forEach(dad => {
            console.log(dad)
            const valores = {
                titulo: dad.title,
                descricao: dad.description,
                categoria: dad.category,
                preco: dad.price,
                porcentagemDesconto: dad.discountPercentage,
                estoque: dad.stock,
                marca: dad.brand,
                imagem: dad.thumbnail
            }

            fetch('http://localhost:3000/produto', {
                method: "POST",
                headers: { "content-type":"application/json" },
                body: JSON.stringify(valores)
            })
            .then(resp => resp.body)
            .then(()=>{
                resLote.innerHTML = "lote registrado com sucesso"
            })
        })
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})