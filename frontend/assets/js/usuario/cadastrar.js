let res = document.getElementById("res")
let resLote = document.getElementById("resLote")
let cadastrar = document.getElementById("cadastrar")
let cadastrarLote = document.getElementById("cadastrarLote")

cadastrar.addEventListener("click", (e)=>{
    e.preventDefault()

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

    fetch('http://localhost:3000/usuario', {
        method: "POST",
        headers: { "content-type":"application/json" },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then((dados)=>{
        res.innerHTML = `Nome: ${dados.primeiroNome} ${dados.ultimoNome}<br>
        Idade: ${dados.idade}<br>
        Email: ${dados.email}<br>
        Telefone: ${dados.telefone}<br>
        Endereço: ${dados.endereco}<br>
        Cidade: ${dados.cidade}<br>
        Estado: ${dados.estado}<br>
        Data de Nascimento: ${dados.dataNascimento}<hr>`
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})

cadastrarLote.addEventListener("click", (e)=>{
    e.preventDefault()

    fetch("https://dummyjson.com/users",{
        method: "GET",
        headers: { "content-type":"application/json" }
    })
    .then(resp => resp.json())
    .then(dados=> {
        dados.users.forEach(user => {
            const valores = {
                primeiroNome: user.firstName,
                ultimoNome: user.lastName,
                idade: user.age,
                email: user.email,
                telefone: user.phone,
                endereco: user.address.address,
                cidade: user.address.city,
                estado: user.address.state,
                dataNascimento: user.birthDate
            };

            fetch('http://localhost:3000/usuario', {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(valores)
            })
            .then(() => {
                resLote.innerHTML = "Lote de usuários registrado com sucesso"
            })
        })
    })
    .catch((err)=>{
        console.error("erro: ", err)
    })
})