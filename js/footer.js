fetch('footer.html') // o 'includes/footer.html' si lo metes en carpeta
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });