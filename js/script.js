
includes/navigator.html // o 'includes/nav.html' si lo metes en carpeta  ofetch('script.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('script-placeholder').innerHTML = data;
    });