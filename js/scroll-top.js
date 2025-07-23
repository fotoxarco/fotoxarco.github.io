// Mostrar u ocultar el botón al hacer scroll
window.onscroll = function () {
    const btn = document.getElementById("btnSubir");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

// Función para hacer scroll hacia arriba
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
