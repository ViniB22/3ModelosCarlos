let res = document.getElementById("res")
let listar = document.getElementById("listar")

listar.addEventListener("click", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/produto")
    .then(resp => resp.json())
    .then(dados => {
        dados.forEach(dad => {
        res.innerHTML += `ID: ${dad.id}<br>
        Nome do Produto: ${dad.titulo} <br>
        Descrição: ${dad.descricao} <br>
        Categoria: ${dad.categoria} <br>
        Preço: R$ ${dad.preco} <br>
        Porcentagem de Desconto: ${dad.porcentagemDesconto}%  <br>
        Estoque: ${dad.estoque} <br>
        Marca: ${dad.marca} <br>
        Imagem: <img src="${dad.imagem}"><hr>`
        })
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})