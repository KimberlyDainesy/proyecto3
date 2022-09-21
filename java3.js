let button = document.getElementById("boton") 
let nombre = document.getElementById("color")
let fondo = document.getElementById("yolo")



let paleta_colores=["yellow", "red", "blue","white","violet","green", "orange", "gray","brown","black","pink","purple","steelblue","gold","silver","plum","magenta"]
let randomclr = 0;

button.addEventListener("click", ()=>{
     randomclr=Math.floor(Math.random()*paleta_colores.length);
    document.getElementById("yolo").style.background = paleta_colores[randomclr];
    document.getElementById("color").textContent = paleta_colores[randomclr];
});