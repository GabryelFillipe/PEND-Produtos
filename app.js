'use strict'

import produtos from "./produtos_atualizados.json" with{type: "json"}

function criarProdutos(produtos, containerDestino){

   // const containerProdutos = document.getElementById('produto')
    const card = document.createElement('div')
    card.classList.add('cards')

    const imagemProduto = document.createElement('img')
    imagemProduto.src = produtos.imagem
    

    const nomeProduto = document.createElement('span')
    nomeProduto.textContent = produtos.nome
    nomeProduto.classList.add('nome')


    const descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produtos.descricao
    descricaoProduto.classList.add('descricao')
    
    const preco = document.createElement('p')
    preco.textContent = produtos.preco
    preco.classList.add('preco')

    const categoria = document.createElement('p')
    categoria.textContent = produtos.categoria
    categoria.classList.add('categoria')

    containerDestino.appendChild(card)
    card.appendChild(imagemProduto)
    card.appendChild(nomeProduto)
    card.appendChild(descricaoProduto)
    card.appendChild(preco)
    card.appendChild(categoria)
}
function carregarProdutos(){
    
    const containerGrupo1 = document.getElementById('produto1');
    const containerGrupo2 = document.getElementById('produto2');
    //produtos.forEach(criarProdutos)
    const primeirosProdutos = produtos.slice(0,5)
    const ultimosProdutos = produtos.slice(5,10)

    primeirosProdutos.forEach(produtos => {
     
        criarProdutos(produtos, containerGrupo1);
    });


    ultimosProdutos.forEach(produtos => {
 
        criarProdutos(produtos, containerGrupo2);
    });
    
}
carregarProdutos()