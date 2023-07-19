function decrementarCantidad() {
    var efecto = document.getElementById('qty');
    var cantidad = parseInt(efecto.value);
    if (!isNaN(cantidad) && cantidad > 1) {
        efecto.value--;
    }
}

function incrementarCantidad() {
    var efecto = document.getElementById('qty');
    var cantidad = parseInt(efecto.value);
    if (!isNaN(cantidad) && cantidad < 300) {
        efecto.value++;
    }
}