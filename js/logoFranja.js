// Version mejorada
document.addEventListener("DOMContentLoaded", () => {
    fetch('htmlBasic/logoFranja.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('logoFranja-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            } else {
                console.warn('No se encontró el contenedor #logoFranja-placeholder');
            }
        })
        .catch(error => {
            console.error('Error al cargar logoFranja.html:', error);
        });
});