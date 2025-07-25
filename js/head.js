// Version mejorada
document.addEventListener("DOMContentLoaded", () => {
    fetch('htmlBasic/head.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('head-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            } else {
                console.warn('No se encontró el contenedor #head-placeholder');
            }
        })
        .catch(error => {
            console.error('Error al cargar head.html:', error);
        });
});
