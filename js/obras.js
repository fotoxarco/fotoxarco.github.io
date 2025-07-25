// Version mejorada
document.addEventListener("DOMContentLoaded", () => {
    fetch('htmlBasic/obras.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('obras-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;
            } else {
                console.warn('No se encontró el contenedor #obras-placeholder');
            }
        })
        .catch(error => {
            console.error('Error al cargar obras.html:', error);
        });
});
