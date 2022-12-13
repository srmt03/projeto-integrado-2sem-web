'use strict'

import './card_menu.js'

const fetchPizza = async function () {
    const url = `https://api-pizzaria.netlify.app/.netlify/functions/api/v1/pizzas`;
    const response = await fetch(url);
    const data = await response.json();
    return data
}

const { pizzas } = await fetchPizza();
console.log(pizzas);

// console.log(pizzas.slice(0, (pizzas.length / 2)))
// console.log(pizzas.slice(0, (pizzas.length / 2)))


// pizzas.forEach(element => {
//     const container = document.querySelector('.column1');
//     const card = document.createElement('card-produtos');

//     card.setAttribute('nome', element.nome);
//     card.setAttribute('descricao', element.descricao);
    
//     container.appendChild(card);
// });
// pizza.forEach(element => {
//     const container = document.querySelector('.column2');
//     const card = document.createElement('card-produtos');

//     card.setAttribute('nome', element.nome);
//     card.setAttribute('descricao', element.descricao);
    
//     container.appendChild(card);
// });

// const fetchPizzaDoce = async function () {
//     const url = ``;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data
// }
// const pizzaDoce = await fetchPizzaDoce();
// console.log(pizzaDoce);

// pizzaDoce.forEach(element => {
//     const container = document.querySelector('.doces');
//     const card = document.createElement('card-produtos');

//     card.setAttribute('nome', element.nome);
//     card.setAttribute('descricao', element.descricao);

//     container.appendChild(card);
// });

// const fetchPizzaOrganica = async function () {
//     const url = ``;
//     const response = await fetch(url);
//     const data = await response.json();
//     return data
// }

// const pizzaOrganica = await fetchPizzaOrganica();
// console.log(pizzaOrganica);

// pizzaOrganica.forEach(element => {
//     const container = document.querySelector('.organicas');
//     const card = document.createElement('card-produtos');

//     card.setAttribute('nome', element.nome);
//     card.setAttribute('descricao', element.descricao);

//     container.appendChild(card);
// });

const fetchBebida = async function () {
    const url = `https://api-pizzaria.netlify.app/.netlify/functions/api/v1/bebidas`
    const response =  await fetch(url);
    const data = await response.json();
    return data
}

const { bebidas } = await fetchBebida();
console.log(bebidas);

// bebida.forEach(element => {
//     const container = document.querySelector('.column1');
//     const card = document.createElement('card-produtos');

//     card.setAttribute('nome', element.nome);
//     card.setAttribute('descricao', element.descricao);
    
//     container.appendChild(card)
// });
// bebida.forEach(element => {
//     const container = document.querySelector('.column2');
//     const card = document.createElement('card-produtos');

//     card.setAttribute('nome', element.nome);
//     card.setAttribute('descricao', element.descricao);
    
//     container.appendChild(card)
// });