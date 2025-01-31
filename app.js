
let listaAmigos = [];
let sorteoRealizado = false; 


function esTextoValido(valor) {
    
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    return regex.test(valor);
}

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo'); 
    const nombreAmigo = inputAmigo.value.trim(); 

    if (nombreAmigo === '') {
        mostrarMensajeError('Por favor, ingresa un nombre válido.'); 
        return; 
    }

    if (!esTextoValido(nombreAmigo)) {
        mostrarMensajeError('Por favor, ingresa solo texto (letras y espacios).'); 
        return; 

    if (listaAmigos.includes(nombreAmigo)) {
        mostrarMensajeError('Este nombre ya está en la lista.'); 
        return; 
    }
    
    listaAmigos.push(nombreAmigo);

    
    inputAmigo.value = '';

    
    actualizarListaAmigos();

    
    verificarBotonSorteo();
}