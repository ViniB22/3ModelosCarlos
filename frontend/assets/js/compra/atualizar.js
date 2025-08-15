let res = document.getElementById("res")
let atualizar = document.getElementById("atualizar")

atualizar.addEventListener("click", (e) => {
    e.preventDefault()

    let id = document.getElementById("id").value
    let fk_produto = document.getElementById("fk_produto").value
    let fk_usuario = document.getElementById("fk_usuario").value
    let quantidade = document.getElementById("quantidade").value
    let dataCompra = document.getElementById("dataCompra").value
    let tipoPagamento = document.getElementById("tipoPagamento").value
    let status = document.getElementById("status").value

    if (!fk_usuario || !fk_produto || !quantidade) {
        alert("Por favor, preencha todos os campos.")
        return
    }

    const valores = {
        fk_produto: fk_produto,
        fk_usuario: fk_usuario,
        quantidade: quantidade,
        dataCompra: dataCompra,
        tipoPagamento: tipoPagamento,
        status: status
    }

    fetch(`http://localhost:3000/compra/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {
        if (dados.id) {
            res.innerHTML = `Compra atualizada com sucesso!<br>
            ID: ${dados.id}<br>
            Produto ID: ${dados.fk_produto}<br>
            Usuário ID: ${dados.fk_usuario}<br>
            Quantidade: ${dados.quantidade}<br>
            Data: ${dados.dataCompra}<br>
            Valor Unitário: R$ ${dados.valorUnitario}<br>
            Desconto: ${dados.descontoAplicado}%<br>
            Preço Final: R$ ${dados.precoFinal}<br>
            Pagamento: ${dados.tipoPagamento}<br>
            Status: ${dados.status}`
        } else {
            res.innerHTML = "Id inválido, tente novamente."
        }
    })
    .catch(error => {
        console.error("Erro ao atualizar a compra:", error)
        res.innerHTML = "Erro ao atualizar a compra!"
    })
})