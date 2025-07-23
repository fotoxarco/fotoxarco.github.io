
fetch('script.html') // o 'includes/nav.html' si lo metes en carpeta
    .then(response => response.text())
    .then(data => {
        document.getElementById('script-placeholder').innerHTML = data;
    });