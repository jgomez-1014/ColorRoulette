const colores = ["#000000", "#111111", "#222222	", "#333333", "#444444",  "#555555", "#666666", "#777777", "#888888", "#999999", "#AAAAAA", "#BBBBBB", "#CCCCCC", "#DDDDDD", "#EEEEEE", "#FFFFFF"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () =>{
    let numeroAleatorio= selector();

    document.body.style.backgroundColor = colores[numeroAleatorio];
    color.textContent = colores[numeroAleatorio];
})

function selector(params) {
    return Math.floor(Math.random() * colores.length);
}