'use strict'

import produtos from "./produtos_atualizados.json" with{type: "json"}

function criarProdutos(produtos){

    const containerProdutos = document.getElementById('produto')
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

    containerProdutos.appendChild(card)
    card.appendChild(imagemProduto)
    card.appendChild(nomeProduto)
    card.appendChild(descricaoProduto)
    card.appendChild(preco)
    card.appendChild(categoria)
}
function carregarProdutos(){
    produtos.forEach(criarProdutos)
}
carregarProdutos()