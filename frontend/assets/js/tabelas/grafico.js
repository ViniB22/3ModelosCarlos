let graficUserAge = document.getElementById('graficUserAge')
let graficProdStock = document.getElementById('graficProdStock')

let idade = [], nome = [], idade10 = [], nome10 = []
let titulo = [], estoque = [], titulo10 = [], estoque10 = []

let buscarDados = document.getElementById('buscarDados')


buscarDados.addEventListener('click', (e)=>{
    e.preventDefault()
    
    let valIni = Number(document.getElementById('valIni').value)
    
    // Usuario ----------------------------------------------------------
    
    fetch('http://localhost:3000/usuario/grafico/')
    .then(resp => resp.json())
    .then(dados => {
      
      console.log(dados)
      
      dados.forEach(dad => {
        idade.push(dad.idade)
        nome.push(dad.primeiroNome)
      })
      
      console.log('-------')
      console.log(nome)
      console.log(idade)
      console.log('-------')
      
      idade10 = idade.slice(valIni,valIni+10)
      nome10 = nome.slice(valIni,valIni+10)
      
      console.log(idade10)
      console.log(nome10)
      
      new Chart(graficUserAge, {
        type: 'bar',
        data: {
          labels: nome10,  // verificar
          datasets: [{
            label: 'Idade',
            data: idade10, // verificar
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      })
    })
    .catch((err)=>{
      console.error('Erro a buscar os dados',err)
    })
    
    // Produto ---------------------------------------------------------

    fetch('http://localhost:3000/produto/grafico')
    .then(resp => resp.json())
    .then(dados => {

      console.log(dados)
      
      dados.forEach(dad => {
        titulo.push(dad.titulo)
        estoque.push(dad.estoque)
      })

      console.log('-------')
      console.log(titulo)
      console.log(estoque)
      console.log('-------')

      estoque10 = estoque.slice(valIni,valIni+10)
      titulo10 = titulo.slice(valIni,valIni+10)

      console.log(estoque10)
      console.log(titulo10)
      
      new Chart(graficProdStock, {
        type: 'polarArea',
        data: {
          labels: titulo10, // verificar
          datasets: [{
            label: 'quantidade',
            data: estoque10, // verificar
            borderWidth: 1
          }]
        },
        // options: {
        //   scales: {
        //     y: {
        //       beginAtZero: true
        //     }
        //   }
        // }
      })
    })
    .catch((err)=>{
      console.error('Erro a buscar os dados',err)
    })
    
  })
