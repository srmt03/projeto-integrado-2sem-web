'use strict'

import './card_promo.js'

const fetchPizza = async function () {
    const url = ``
    const response =  await fetch(url);
    const data = await response.json();
    return data
}

const pizza = await fetchPizza();
console.log(pizza);

pizza.forEach(element => {
    const container = document.querySelector('.promocoes')
    const card = document.createElement('.card_promo')

    card.setAttribute('imagem', element.imagem)
    card.setAttribute('nome', element.nome)
    card.setAttribute('descricao', element.descricao)
    card.setAttribute('preco', element.preco)
    
    container.appendChild(card)
});

const fetchBebida = async function () {
    const url = ``
    const response =  await fetch(url);
    const data = await response.json();
    return data
}

const bebida = await fetchBebida();
console.log(bebida);

bebida.forEach(element => {
    const container = document.querySelector('.promocoes')
    const card = document.createElement('.card_promo')

    card.setAttribute('imagem', element.imagem)
    card.setAttribute('nome', element.nome)
    card.setAttribute('descricao', element.descricao)
    card.setAttribute('preco', element.preco)
    
    container.appendChild(card)
});

