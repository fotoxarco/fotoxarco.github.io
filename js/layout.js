document.addEventListener("DOMContentLoaded", () => {
    const includes = [
        { id: 'head-placeholder', url: 'htmlBasic/head.html' },
        { id: 'nav-placeholder', url: 'htmlBasic/nav.html' },
        { id: 'footer-placeholder', url: 'htmlBasic/footer.html' },
        { id: 'obras-placeholder', url: 'htmlBasic/obras.html' }
    ];

    includes.forEach(part => {
        fetch(part.url)
            .then(res => res.text())
            .then(data => {
                const container = document.getElementById(part.id);
                if (container) {
                    container.innerHTML = data;

                    // Activar el menú hamburguesa después de cargar nav.html
                    if (part.id === 'nav-placeholder') {
                        activarMenuHamburguesa();
                    }
                } else {
                    console.warn(`No se encontró el contenedor #${part.id}`);
                }
            })
            .catch(err => {
                console.error(`Error al cargar ${part.url}:`, err);
            });
    });

    function activarMenuHamburguesa() {
        const toggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('main-menu');

        if (toggle && menu) {
            toggle.addEventListener('click', () => {
                menu.classList.toggle('show');
                toggle.setAttribute('aria-expanded', menu.classList.contains('show'));
            });
        }

        // Activar submenús en móviles
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
    }
});
