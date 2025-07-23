document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('main-menu');

    toggle.addEventListener('click', () => {
        menu.classList.toggle('show');
        toggle.setAttribute('aria-expanded', menu.classList.contains('show'));
    });

    // Abrir submenús con clic en móvil
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
});
