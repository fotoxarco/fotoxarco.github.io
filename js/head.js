fetch('head.html') // o 'includes/head.html' si lo metes en carpeta
    .then(response => response.text())
    .then(data => {
        document.getElementById('head-placeholder').innerHTML = data;
    });