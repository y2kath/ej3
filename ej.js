function problema3(){
    const input = document.getElementById("p3-input");
    const textoIngresado = input.value.toUpperCase();

 
    const caracteresValidos = /^[A-Z,]+$/;
    if (!caracteresValidos.test(textoIngresado)) {
        alert("Simbolo no encontrado. Ingrese letras mayúsculas separadas por comas sin espacios.");
        return;
    }

    const palabras = textoIngresado.split(",");
    let maxCaracteresUnicos = 0;
    let palabraConMasCaracteresUnicos = "";

    for (const palabra of palabras) {
        const caracteres = new Set(palabra);
        if (caracteres.size > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteres.size;
            palabraConMasCaracteresUnicos = palabra;
        }
    }

    document.getElementById("p3-output").textContent = `La palabra con más caracteres es: ${palabraConMasCaracteresUnicos} con ${maxCaracteresUnicos}`;
}