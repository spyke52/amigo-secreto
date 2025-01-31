
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
        alert('Por favor, ingresa un nombre válido.'); 
        return; 
    }

    
    if (!esTextoValido(nombreAmigo)) {
        mostrarMensajeError('Por favor, ingresa solo texto (letras y espacios).');
        return; 
    }

    
    if (listaAmigos.includes(nombreAmigo)) {
        mostrarMensajeError('Este nombre ya está en la lista.');
        return;
    }

    
    listaAmigos.push(nombreAmigo);


    inputAmigo.value = ' ';

    actualizarListaAmigos();

    
    verificarBotonSorteo();
}


function actualizarListaAmigos() {
    const listaAmigosElement = document.getElementById('listaAmigos'); 
    listaAmigosElement.innerHTML = ''; 

    
    listaAmigos.forEach((nombre, index) => {
        const itemLista = document.createElement('li'); 
        itemLista.textContent = `${nombre}`; 
        listaAmigosElement.appendChild(itemLista); 
    });
}


function sortearAmigo() {
    
    if (sorteoRealizado) {
        mostrarMensajeError('El sorteo ya se ha realizado.'); 
        return; 
    }

   
    if (listaAmigos.length === 0) {
        mostrarMensajeError('No hay nombres en la lista para sortear.'); 
        return; 
    }

    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length); 
    const amigoSecreto = listaAmigos[indiceAleatorio];
        
   
    document.getElementById('listaAmigos').style.display = 'none';

   
    const resultadoElement = document.getElementById('resultado'); 
    resultadoElement.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`; // 

    
    sorteoRealizado = true;

    const botonSorteo = document.querySelector('.button-draw');
    botonSorteo.disabled = true;
}


function mostrarMensajeError(mensaje) {
    const mensajeErrorElement = document.getElementById('mensajeError'); 
    mensajeErrorElement.textContent = mensaje;
    mensajeErrorElement.style.display = 'block'; 
}


function verificarBotonSorteo() {
    const botonSorteo = document.querySelector('.button-draw');
    botonSorteo.disabled = listaAmigos.length === 0 || sorteoRealizado;
}


document.querySelector('.button-add').addEventListener('click', agregarAmigo);
document.querySelector('.button-draw').addEventListener('click', sortearAmigo);


document.getElementById('amigo').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        agregarAmigo();
    }
});


verificarBotonSorteo();
