// Lista para almacenar los nombres
const listaDeAmigos = [];

// Referencias a elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");



x
// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = inputAmigo.value.trim(); // Elimina espacios al inicio y final

    if (nombre === "") {
        alert("⚠️ Por favor, ingresa un nombre válido.");
        return; // Sale de la función sin continuar
    }

    // Si el nombre es válido, continúa con el proceso
    listaDeAmigos.push(nombre);

    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);

    inputAmigo.value = ""; // Limpia el campo
}





// Función para sortear un amigo secreto con efecto visual
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado en el overlay
    const overlay = document.getElementById("overlay");
    const mensaje = document.getElementById("mensajeSorteo");
    mensaje.innerHTML = `🎉 El amigo secreto es: <strong>${nombreSorteado}</strong>`;
    overlay.classList.remove("hidden");

    // Mostrar el botón de reinicio
    document.getElementById("botonReiniciar").classList.remove("hidden");
}

// Función para cerrar el overlay
function cerrarOverlay() {
    const overlay = document.getElementById("overlay");
    overlay.classList.add("hidden");
}



// Función para reiniciar el listado de amigos
function reiniciarListado() {
    // Vacía el array
    listaDeAmigos.length = 0;

    // Limpia la lista visual
    listaAmigos.innerHTML = "";

    // Oculta el botón de reinicio
    document.getElementById("botonReiniciar").classList.add("hidden");

    // Limpia el resultado si está visible
    resultado.innerHTML = "";
}