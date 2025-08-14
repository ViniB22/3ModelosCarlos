let res = document.getElementById("res")
let listar = document.getElementById("listar")

listar.addEventListener("click", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/compra", {
        method: "GET",
        headers: { "content-type": "application/json" }
    })
    .then(resp => resp.json())
    .then(dados => {
        dados.forEach(dad => {
        res.innerHTML += `ID da Compra: ${dad.id}<br>
            Produto ID: ${dad.fk_produto}<br>
            Usuário ID: ${dad.fk_usuario}<br>
            Quantidade: ${dad.quantidade}<br>
            Data: ${dad.dataCompra}<br>
            Valor Unitário: R$ ${dad.valorUnitario}<br>
            Desconto: ${dad.descontoAplicado}%<br>
            Preço Final: R$ ${dad.precoFinal}<br>
            Pagamento: ${dad.tipoPagamento}<br>
            Status: ${dad.status}<hr>`
    })
})
})