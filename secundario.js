const colores = ["cyan", "magenta", "yellow", "black"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () =>{

    numeroRandom = selector();
    console.log(numeroRandom);

    document.body.style.backgroundColor = colores[numeroRandom];
    color.textContent = colores[numeroRandom];
})

function selector() {
    return Math.floor(Math.random()*colores.length)
}

