// lista de nombres de los amigos
let listaAmigos = [];
let sorteoRealizado = false; // variable para saber si ya se realizo el sorteo

// funcion para validar si es texto.
function esTextoValido(valor) {
    // exprecion para validar texto y espacio
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    return regex.test(valor);
}
