const months  = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = new Date();
const dayNum = date.getDay()
const active = document.querySelector(".week li:nth-child("+dayNum+")")



const day = date.getDate();
const month = months[date.getMonth()]


active.classList.add('current')

// day
const h1 = document.createElement('h1');
h1.textContent = day;
active.appendChild(h1)

// month
const h3 = document.createElement("h3")
h3.textContent = month;
active.appendChild(h3)

