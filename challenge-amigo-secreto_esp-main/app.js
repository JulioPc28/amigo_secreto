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






// Función para sortear un amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre.");
        return;
    }

    // Selección aleatoria
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${nombreSorteado}</strong></li>`;
}