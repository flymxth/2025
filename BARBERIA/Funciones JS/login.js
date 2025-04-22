document.getElementById("FormularioLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    var Usuario = document.getElementById("usuario").value.trim();
    var Password = document.getElementById("password").value.trim();

    document.getElementById("mensajeUsuario").textContent = "";
    document.getElementById("mensajePassword").textContent = "";

    var formularioValido = true;

    if (Usuario === "") {
        document.getElementById("mensajeUsuario").textContent = "Campo vacío";
        formularioValido = false;
    }

    if (Password === "") {
        document.getElementById("mensajePassword").textContent = "Campo vacío";
        formularioValido = false;
    }
});
