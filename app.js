'use strict'

import produtos from "./produtos_atualizados.json" with{type: "json"}

function carregarClassificacao(classificacao) {

    const estrela ={

    1 :'★☆☆☆☆',
    2 :'★★☆☆☆',
    3 :'★★★☆☆',
    4 : '★★★★☆',
    5 : '★★★★★'
    }

    return estrela[classificacao];
}

function criarProdutos(produtos, containerDestino,) {

    // const containerProdutos = document.getElementById('produto')
    const card = document.createElement('div')
    card.classList.add('cards')
    card.setAttribute('id', 'card')

    const imagemProduto = document.createElement('img')
    imagemProduto.src = produtos.imagem

    const idProduto = produtos.id
    

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

    const classificacaoProduto = document.createElement('h3')
    classificacaoProduto.textContent = carregarClassificacao(produtos.classificacao)

    mensagem(card, produtos)

    containerDestino.appendChild(card)
    card.appendChild(imagemProduto)
    card.appendChild(nomeProduto)
    card.appendChild(descricaoProduto)
    card.appendChild(preco)
    card.appendChild(classificacaoProduto)
    card.appendChild(categoria)



}
function carregarProdutos() {

    const containerGrupo1 = document.getElementById('produto1');
    const containerGrupo2 = document.getElementById('produto2');
    const primeirosProdutos = produtos.slice(0, 5)
    const ultimosProdutos = produtos.slice(5, 10)

    primeirosProdutos.forEach(produtos => {

        criarProdutos(produtos, containerGrupo1);
    });


    ultimosProdutos.forEach(produtos => {

        criarProdutos(produtos, containerGrupo2);
    });

}
carregarProdutos()





function mensagem(card, produtoClicado) {
    card.addEventListener('click', () => {
        // Remove o modal e o fundo antigos, se existirem
        const spanExistente = document.getElementById('span-produtos');
        const overlayExistente = document.getElementById('modal-overlay');
        if (spanExistente) {
            spanExistente.remove();
        }
        if (overlayExistente) {
            overlayExistente.remove();
        }

        // Cria o fundo escurecido
        const overlay = document.createElement('div');
        overlay.id = 'modal-overlay';
        overlay.className = 'modal-overlay';
        document.body.appendChild(overlay);

        // Cria o modal do produto
        criarSpan(produtoClicado);

        // Adiciona um evento para fechar o modal ao clicar no fundo
        overlay.addEventListener('click', () => {
            const spanParaRemover = document.getElementById('span-produtos');
            if(spanParaRemover) spanParaRemover.remove();
            overlay.remove();
        });
    });
}
function criarSpan(produtos){

        const spanProdutos = document.createElement('div')
        spanProdutos.classList.add('span-produtos')
        spanProdutos.setAttribute('id', 'span-produtos')

        const imagemProduto = document.createElement('img')
        imagemProduto.src = produtos.imagem

        const textoSpan = document.createElement('div')
        textoSpan.classList.add('texto-span')

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

        const classificacaoProduto = document.createElement('h3')
        classificacaoProduto.textContent = carregarClassificacao(produtos.classificacao)

        spanProdutos.appendChild(imagemProduto)
        spanProdutos.appendChild(textoSpan)
        textoSpan.appendChild(nomeProduto)
        textoSpan.appendChild(descricaoProduto)
        textoSpan.appendChild(preco)
        textoSpan.appendChild(classificacaoProduto)
        textoSpan.appendChild(categoria)

        document.body.appendChild(spanProdutos)
}

