let res = document.getElementById("res")
let atualizar = document.getElementById("atualizar")

atualizar.addEventListener("click", (e) => {
    e.preventDefault()

    let id = Number(document.getElementById("id").value)
    let titulo = document.getElementById("titulo").value
    let descricao = document.getElementById("descricao").value
    let categoria = document.getElementById("categoria").value
    let preco = Number(document.getElementById("preco").value)
    let porcentagemDesconto = Number(document.getElementById("porcentagemDesconto").value)
    let estoque = Number(document.getElementById("estoque").value)
    let marca = document.getElementById("marca").value
    let imagem = document.getElementById("imagem").value

    const valores = {
        titulo: titulo,
        descricao: descricao,
        categoria: categoria,
        preco: preco,
        porcentagemDesconto: porcentagemDesconto,
        estoque: estoque,
        marca: marca,
        imagem: imagem
    }

    fetch(`http://localhost:3000/produto/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {
        
        console.log(dados)
        if (dados.id) {
            res.innerHTML = `Nome: ${dados.titulo}<br>
            Descrição: ${dados.descricao}<br>
            Categoria: ${dados.categoria}<br>
            Preço: R$ ${dados.preco}<br>
            Porcentagem de Desconto: ${dados.porcentagemDesconto}%<br>
            Estoque: ${dados.estoque}<br>
            Marca: ${dados.marca}<br>
            Imagem: <img src="${dados.imagem}">`;
        } else {
            res.innerHTML = "Id invalido tente novamente.";
        }
    })
    .catch(error => {
        console.error("Erro ao atualizar o produto:", error);
    });
})