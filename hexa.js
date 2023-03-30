const colores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () =>{
    let hexa= "#";
    
    for (let i = 0; i < 6; i++) {
        hexa += colores[selector()];
    }     
    document.body.style.backgroundColor = hexa;
    color.textContent = hexa;
})

function selector(params) {
    return Math.floor(Math.random() * colores.length);
}