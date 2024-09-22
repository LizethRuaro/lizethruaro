//BOTONES//
function abrirMenu() {
    // Código para abrir el menú
    w3_open();
}

function cerrarMenu() {
    // Código para cerrar el menú
    w3_close(); // Asegúrate de tener esta función definida
}

//MENU DESPLEGABLE//

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Función para alternar el menú desplegable
function toggleDropdown(event) {
    event.stopPropagation(); // Evita que el clic en el botón cierre el menú de inmediato
    var dropdown = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('show');
}

// Cierra el menú desplegable si se hace clic fuera de él
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        var dropdowns = document.getElementsByClassName('w3-dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

//REDIRIGIR PAGINA BOTON FLECHA//
function redirigirPortafolio() {
    window.location.href = 'lportafolioindex.html'; // Reemplaza con el nombre del archivo al que quieres redirigir
}

//REDIRIGIR BOTON CONOCE MAS//
function redirigircv() {
    window.location.href = 'cvindex.html'; // Reemplaza con el nombre del archivo al que quieres redirigir
}



