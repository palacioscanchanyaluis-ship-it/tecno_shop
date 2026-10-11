
const botones = document.querySelectorAll(".add-cart");

botones.forEach(function (boton) {
    boton.addEventListener("click", function () {
        const producto = boton.dataset.product;

        alert("Has seleccionado: " + producto);
    });
});

const botonContacto = document.getElementById("contactButton");
const mensaje = document.getElementById("message");

botonContacto.addEventListener("click", function () {
    mensaje.textContent =
        "¡Gracias por visitar TecnoShop! Esta es una demostración educativa.";
});