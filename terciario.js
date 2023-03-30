const colores = ["#808080", "#FF8080", "#800080	", "#80FFFF", "#800000",  "#FF8000", "#8000FF", "#00FF80", "#BBBB20"];

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