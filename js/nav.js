document.addEventListener("DOMContentLoaded", () => {
    fetch('htmlBasic/nav.html')
        .then(response => response.text())
        .then(data => {
            const placeholder = document.getElementById('nav-placeholder');
            if (placeholder) {
                placeholder.innerHTML = data;

                // Ahora que el nav se ha insertado, activamos el menú hamburguesa
                const toggle = document.getElementById('menu-toggle');
                const menu = document.getElementById('main-menu');

                if (toggle && menu) {
                    toggle.addEventListener('click', () => {
                        menu.classList.toggle('show');
                        toggle.setAttribute('aria-expanded', menu.classList.contains('show'));
                    });
                }

                // Activar submenús en móvil
                const navItems = document.querySelectorAll('.nav-links > li > a');
                navItems.forEach(link => {
                    const submenu = link.nextElementSibling;
                    if (submenu && submenu.classList.contains('submenu')) {
                        link.addEventListener('click', (e) => {
                            if (window.innerWidth <= 768) {
                                e.preventDefault();
                                submenu.classList.toggle('submenu-open');
                            }
                        });
                    }
                });

            } else {
                console.warn('No se encontró el contenedor #nav-placeholder');
            }
        })
        .catch(error => {
            console.error('Error al cargar nav.html:', error);
        });
});
