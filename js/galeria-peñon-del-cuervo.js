const imagenes = [
    'Salvador_Calero01.webp',
    'Salvador_Calero02.webp',
    'Salvador_Calero03.webp',
    'Salvador_Calero04.webp'

];

const carpeta = '../img/galeria/peñon-del-cuervo/';
let indiceCarrusel = 0;
let indiceModal = 0;

const carruselImg = document.getElementById('carrusel-img');
const carruselAutor = document.getElementById('carrusel-autor');
const galeria = document.getElementById('galeria');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalAutor = document.getElementById('modal-autor');

function extraerAutor(nombre) {
    return nombre.replace(/\.[^/.]+$/, "").replace(/_/g, " ");
}

function mostrarCarrusel() {

    const ruta = carpeta + imagenes[indiceCarrusel];
    console.log('Carrusel carga:', ruta);
    carruselImg.src = carpeta + imagenes[indiceCarrusel];
    carruselAutor.textContent = extraerAutor(imagenes[indiceCarrusel]);
}

function cambiarFoto(n) {
    indiceCarrusel = (indiceCarrusel + n + imagenes.length) % imagenes.length;
    mostrarCarrusel();
}

function autoCarrusel() {
    cambiarFoto(1);
}

function crearMiniaturas() {
    imagenes.forEach((img, index) => {
        const ruta = carpeta + img;
        console.log('Miniatura carga:', ruta);
        const thumb = document.createElement('img');
        thumb.src = carpeta + img;
        thumb.alt = extraerAutor(img);
        thumb.classList.add('miniatura');
        thumb.onclick = () => abrirModal(index);
        galeria.appendChild(thumb);
    });
}

function abrirModal(index) {
    indiceModal = index;
    modal.style.display = 'block';
    modalImg.src = carpeta + imagenes[index];
    modalAutor.textContent = extraerAutor(imagenes[index]);
}

function cerrarModal() {
    modal.style.display = 'none';
}

function cambiarModal(n) {
    indiceModal = (indiceModal + n + imagenes.length) % imagenes.length;
    modalImg.src = carpeta + imagenes[indiceModal];
    modalAutor.textContent = extraerAutor(imagenes[indiceModal]);
}

document.addEventListener('DOMContentLoaded', () => {
    mostrarCarrusel();
    crearMiniaturas();
    setInterval(autoCarrusel, 5000);
});

// Protección adicional (opcional)
document.addEventListener('contextmenu', event => event.preventDefault());
