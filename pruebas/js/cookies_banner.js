// Mostrar banner si no se ha aceptado previamente
window.addEventListener('load', () => {
    if (!localStorage.getItem('cookies-accepted')) {
        const banner = document.createElement('div');
        banner.id = 'cookie-banner';
        banner.innerHTML = `
            <div class="cookie-content">
                <p>Utilizamos cookies propias y de terceros para mejorar su experiencia y recopilar datos estadísticos. Al continuar navegando acepta nuestra <a href='cookies.html'>Política de Cookies</a>.</p>
                <button id="accept-cookies">Aceptar</button>
            </div>
    `;
        document.body.appendChild(banner);

        document.getElementById('accept-cookies').addEventListener('click', () => {
            localStorage.setItem('cookies-accepted', 'true');
            banner.remove();
        });
    }
});
