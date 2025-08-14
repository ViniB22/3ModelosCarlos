let res = document.getElementById("res")
let apagar = document.getElementById("apagar")

apagar.addEventListener("click", (e) => {
    e.preventDefault()

    let id = document.getElementById("id").value

    fetch(`http://localhost:3000/produto/${id}`, {
        method: "DELETE",
        headers: { "content-type": "application/json" }
    })
    .then(resp => {
        console.log(resp)
        if (resp.status === 204) {
            res.innerHTML += "Os dados foram excluidos com sucesso!"
        } else {
            res.innerHTML += "Id invalido tente novamente."
        }
    })
    .catch(error => {
        console.error("Erro ao apagar o produto:", error)
    })
})