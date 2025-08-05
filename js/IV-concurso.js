const imagenes = [
    'ANTONIO_B.F.01.jpg',
    'ANTONIO_B.F.02.jpg',
    'ANTONIO_B.F.03.jpg',
    'BLANCA_P.01.jpg',
    'BLANCA_P.02.jpg',
    'BLANCA_P.03.jpg',
    'DANIEL_A.T.01.jpg',
    'DANIEL_A.T.02.jpg',
    'DANIEL_A.T.03.jpg',
    'DANIEL_M.A.01.jpg',
    'DANIEL_M.A.02.jpg',
    'DANIEL_M.A.03.jpg',
    'ESTEBAN_D.01.jpg',
    'ESTEBAN_D.02.jpg',
    'ESTEBAN_D.03.jpg', 
    'H.A.01.jpg',
    'H.A.02.jpg',
    'H.A.03.jpg',
    'IVAN_V.R.01.jpg',
    'IVAN_V.R.02.jpg',
    'IVAN_V.R.03.jpg',
    'JESSICA_P.J.01.jpg',
    'JESSICA_P.J.02.jpg',
    'JESSICA_P.J.03.jpg',
    'JOSE_M.A.01.jpg',
    'JOSE_M.A.02.jpg',
    'JOSE_M.A.03.jpg',
    'LOLA_Q.01.jpg',
    'LOLA_Q.02.jpg',
    'LOLA_Q.03.jpg',
    'MARIA_JESUS_S.M.01.jpg',
    'MARIA_JESUS_S.M.02.jpg',
    'MARIA_JESUS_S.M.03.jpg',
    'MARIA_LUZ_P.C.01.jpg',
    'MARIA_LUZ_P.C.02.jpg',
    'MARIA_LUZ_P.C.03.jpg',
    'SARA_M.C.01.jpg',
    'SERGIO_P.R.01.jpg',
    'SERGIO_P.R.02.jpg',
    'SERGIO_P.R.03.jpg',
    'YERAY_M.G.01.jpg',
    'YERAY_M.G.02.jpg',
    'YERAY_M.G.03.jpg'
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
