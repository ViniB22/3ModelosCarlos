let res = document.getElementById("res")
let listar = document.getElementById("listar")

listar.addEventListener("click", (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/usuario")
    .then(resp => resp.json())
    .then(dados => {
    dados.forEach(dad => {
        res.innerHTML += `ID: ${dad.id}<br>
        Nome: ${dad.primeiroNome} ${dad.ultimoNome}<br>
        Idade: ${dad.idade}<br>
        Email: ${dad.email}<br>
        Telefone: ${dad.telefone}<br>
        Endereço: ${dad.endereco}<br>
        Cidade: ${dad.cidade}<br>
        Estado: ${dad.estado}<br>
        Data de Nascimento: ${dad.dataNascimento}<hr>`
        })
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})