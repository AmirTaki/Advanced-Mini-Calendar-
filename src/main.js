const date = new Date();
const dayNum = date.getDay()
const active = document.querySelector(".week li:nth-child("+dayNum+")")


const day = date.getDate();

active.classList.add('current')

const h1 = document.createElement('h1');
