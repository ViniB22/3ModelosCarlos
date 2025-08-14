let res = document.getElementById("res")
let atualizar = document.getElementById("atualizar")

atualizar.addEventListener("click", (e) => {
    e.preventDefault()

    let id = Number(document.getElementById("id").value)
    let primeiroNome = document.getElementById("primeiroNome").value
    let ultimoNome = document.getElementById("ultimoNome").value
    let idade = Number(document.getElementById("idade").value)
    let email = document.getElementById("email").value
    let telefone = document.getElementById("telefone").value
    let endereco = document.getElementById("endereco").value
    let cidade = document.getElementById("cidade").value
    let estado = document.getElementById("estado").value
    let dataNascimento = document.getElementById("dataNascimento").value
    

     const valores = {
        primeiroNome: primeiroNome,
        ultimoNome: ultimoNome,
        idade: idade,
        email: email,
        telefone: telefone,
        endereco: endereco,
        cidade: cidade,
        estado: estado,
        dataNascimento: dataNascimento
    };

    fetch(`http://localhost:3000/usuario/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        if (dados.id) {
            res.innerHTML = `Nome: ${dados.primeiroNome} ${dados.ultimoNome}<br>
            Idade: ${dados.idade}<br>
            Email: ${dados.email}<br>
            Telefone: ${dados.telefone}<br>
            Endereço: ${dados.endereco}<br>
            Cidade: ${dados.cidade}<br>
            Estado: ${dados.estado}<br>
            Data de Nascimento: ${dados.dataNascimento}<hr>`
        } else {
            res.innerHTML = "Id invalido tente novamente.";
        }
    })
    .catch(error => {
        console.error("Erro ao atualizar o usario:", error);
    })
})