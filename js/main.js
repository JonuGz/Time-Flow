function cambiarContenido() {
    var parrafo = document.getElementById("TFM");
    var windowWidth = window.innerWidth;

    if (windowWidth <= 600) {
        parrafo.textContent = "TFM";
    } else {
        parrafo.textContent = "TimeFlowMaster";
    }
}

window.addEventListener("resize", cambiarContenido);
cambiarContenido(); // Llamar a la función al cargar la página para establecer el contenido inicial.
