const colores = ["green", "blue", "red", "white"];

const boton = document.getElementById('btn');
const color = document.querySelector(".color");

boton.addEventListener('click', () =>{

    let numeroAleatorio = selector();
    console.log(selector());

    document.body.style.backgroundColor = colores[numeroAleatorio];
    color.textContent = colores[numeroAleatorio];
})

function selector(){
    return Math.floor(Math.random()*colores.length);
}
