
let perfil = document.querySelector('.no1');
let titulo1 = document.getElementById('titulo1');
function per () {
    return `<p>
    Programador junior orientado al detalle que ofrece excelentes habilidades analíticas.
    <br>
    Con gran capacidad de funcionar bien tanto de forma independiente como en entornos de trabajo.
    <br>
    Ganador del premio al empleado del año con 3 años de experiencia relevante y un enfoque proactivo.
    <br>
    Esto es inventado por supuesto.
  </p>`
    }

    perfil.innerHTML += per();

   titulo1.addEventListener("click" , function(){
    if(perfil.className == "no1") {
        document.getElementById('si1').classList.remove('no1');
    } else if (perfil.className == "" ) {
        document.getElementById('si1').classList.add('no1');
    } 
}) 

function habili (){
    return  `
    <ul>
        <li> Idiomas</li>
        <li> Alemán</li>
        <li> Inglés</li>
        <li> Francés</li>
      </ul>
    `
}

let habilidades = document.getElementById("habilidades");
let titulo2 = document.getElementById("titulo2");

habilidades.innerHTML += habili();

titulo2.addEventListener("click" , function(){
    if(habilidades.className == "no1") {
        habilidades.classList.remove('no1');
    } else if (habilidades.className == "" ) {
        habilidades.classList.add('no1');
    } 
}) 


function conoc (){
    return `
        <ul>
        <li>MS Office</li>
        <li>monday.com</li>
        <li>Python, Java</li>
        <li>GitHub</li>
      </ul>`
}

let cono = document.getElementById("conocimientos");
let titulo3 = document.getElementById("titulo3");

cono.innerHTML += conoc();

titulo3.addEventListener("click" , function(){
    if(cono.className == "no1") {
        cono.classList.remove('no1');
    } else if (cono.className == "" ) {
        cono.classList.add('no1');
    } 
}) 
