// Función para validar que el texto solo contenga letras minúsculas y sin acentos
function validarTexto() {
    const inputText = document.getElementById("inputText");
    inputText.value = inputText.value.toLowerCase().replace(/[^a-z\s]/g, "");
}

// Función para encriptar el texto
function encriptar() {
    let texto = document.getElementById("inputText").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    document.getElementById("outputText").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar() {
    let texto = document.getElementById("inputText").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("outputText").value = textoDesencriptado;
}

// Función para copiar el texto al portapape
function copiarTexto() {
    let texto = document.getElementById("outputText");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}



// Mensaje secreto de Alura: "felicidades por enfrentar este desafio y haberlo concluido con exito"