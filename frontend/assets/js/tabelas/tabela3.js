async function listarCompras() {
    const response = await fetch('http://localhost:3000/compra');
    return response.json();
  }
  
  document.addEventListener('DOMContentLoaded', async () => {
    const tabela = document.querySelector('#tabelaCompras');
    const compras = await listarCompras();
    tabela.innerHTML = '';
    compras.forEach(compra => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${compra.id}</td>
        <td>${compra.fk_produto}</td>
        <td>${compra.fk_usuario}</td>
        <td>${compra.quantidade}</td>
        <td>${compra.dataCompra}</td>
        <td>${compra.valorUnitario}</td>
        <td>${compra.descontoAplicado}</td>
        <td>${compra.precoFinal}</td>
        <td>${compra.tipoPagamento}</td>
        <td>${compra.status}</td>`;
      tabela.appendChild(tr);
    });
  });