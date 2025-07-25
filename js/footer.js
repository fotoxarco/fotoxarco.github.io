// Version mejorada
document.addEventListener("DOMContentLoaded", () => {
    fetch('htmlBasic/footer.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('footer-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            } else {
                console.warn('No se encontró el contenedor #footer-placeholder');
            }
        })
        .catch(error => {
            console.error('Error al cargar footer.html:', error);
        });
});
