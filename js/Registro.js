const formulario = document.getElementById("registroForm");

const mensajeError = document.getElementById("mensajeError");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const inputs = formulario.querySelectorAll("input");

    for(let input of inputs){

        if(input.value.trim() === ""){

            mensajeError.textContent =
            `Falta llenar el campo: ${input.placeholder}`;

            return;
        }
    }

    mensajeError.textContent = "";

    window.location.href = "menu.html";
});