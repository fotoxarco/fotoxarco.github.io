// js/proteger-imagenes.js

document.addEventListener("DOMContentLoaded", function () {
    const imagenes = document.querySelectorAll("img");

    imagenes.forEach(function (img) {
        // Texto que se mostrará como tooltip
        const mensaje = "@Fotoxarco";

        // Establece el atributo title si no existe
        if (!img.hasAttribute("title")) {
            img.setAttribute("title", mensaje);
        }

        // Desactivar clic derecho
        img.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            // Opcional: forzar visualización del tooltip
            img.setAttribute("title", mensaje);
        });

        // Evitar arrastre
        img.setAttribute("draggable", "false");
        img.addEventListener("dragstart", function (e) {
            e.preventDefault();
            img.setAttribute("title", mensaje);
        });
    });
});
