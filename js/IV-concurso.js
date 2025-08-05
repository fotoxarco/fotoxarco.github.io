const imagenes = [
    'ANTONIO_BLAS_FERNANDEZ01.jpg',
    'ANTONIO_BLAS_FERNANDEZ02.jpg',
    'ANTONIO_BLAS_FERNANDEZ03.jpg',
    'BLANCA_POMAR01.jpg',
    'BLANCA_POMAR02.jpg',
    'BLANCA_POMAR03.jpg',
    'DANIEL_AGUILAR_TRIANO01.jpg',
    'DANIEL_AGUILAR_TRIANO02.jpg',
    'DANIEL_AGUILAR_TRIANO03.jpg',
    'DANIEL_MARTINEZ_ALBA01.jpg',
    'DANIEL_MARTINEZ_ALBA02.jpg',
    'DANIEL_MARTINEZ_ALBA03.jpg',
    'ESTEBAN_D´AZUA01.jpg',
    'ESTEBAN_D´AZUA02.jpg',
    'ESTEBAN_D´AZUA03.jpg', 
    'H.A.01.jpg',
    'H.A.02.jpg',
    'H.A.03.jpg',
    'IVAN_VILLALOBOS_RUIZ01.jpg',
    'IVAN_VILLALOBOS_RUIZ02.jpg',
    'IVAN_VILLALOBOS_RUIZ03.jpg',
    'JESSICA_PAREJA_JIMENEZ01.jpg',
    'JESSICA_PAREJA_JIMENEZ02.jpg',
    'JESSICA_PAREJA_JIMENEZ03.jpg',
    'JOSE_MELLADO_ALVAREZ01.jpg',
    'JOSE_MELLADO_ALVAREZ02.jpg',
    'JOSE_MELLADO_ALVAREZ03.jpg',
    'LOLA_QUINTANA01.jpg',
    'LOLA_QUINTANA02.jpg',
    'LOLA_QUINTANA03.jpg',
    'MARIA_JESUS_SALVATIERRA_MIGUEL01.jpg',
    'MARIA_JESUS_SALVATIERRA_MIGUEL02.jpg',
    'MARIA_JESUS_SALVATIERRA_MIGUEL03.jpg',
    'MARIA_LUZ_PONCE_CORDERO01.jpg',
    'MARIA_LUZ_PONCE_CORDERO02.jpg',
    'MARIA_LUZ_PONCE_CORDERO03.jpg',
    'SARA_MADRIGAL_CASTRO01.jpg',
    'SERGIO_PEREZ_REYES01.jpg',
    'SERGIO_PEREZ_REYES02.jpg',
    'SERGIO_PEREZ_REYES03.jpg',
    'YERAY_MARTIN_GUERRA01.jpg',
    'YERAY_MARTIN_GUERRA02.jpg',
    'YERAY_MARTIN_GUERRA03.jpg'
];

const carpeta = '../img/galeria/IV-Concurso/';
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
