'use strict'

import produtos from "./produtos_atualizados.json" with{type: "json"}

function criarProdutos(produtos_atualizados){

    const containerProdutos = document.getElementById('produto')
    const card = document.createElement('div')

    const imagemProduto = document.createElement('img')
    imagemProduto.src = produto.imagem

    const nomeProduto = document.createElement('span')
    nomeProduto.textContent = produto.nome

    const descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao
    
    const preco = document.createElement('p')
    preco.textContent = produto.preco

    const categoria = document.createElement('p')
    categoria.textContent = produto.categoria

    containerProdutos.appendChild(card)
    card.appendChild(imagemProduto)
    card.appendChild(nomeProduto)
    card.appendChild(descricaoProduto)
    card.appendChild(preco)
    card.appendChild(categoria)
}
function carregarProdutos(){
    produto.forEach(criarProdutos)
}
carregarProdutos()