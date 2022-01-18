document.getElementsByTagName("h1")[0].innerHTML = `${localStorage.getItem("username")}'s Chat`;
document.getElementsByClassName("bot")[0].innerHTML = `Hola! ${localStorage.getItem("username")}`;

const enviarMensaje = () => {

    let mensaje = document.getElementById("msg");
    let mensajesRandom = [
        "a",
        "._.XD",
        "Comes",
        "Messirve",
        "Juan",
        "Esto no es un pvto juego",
        "Bueno, vamo a jugar",
        "ta weno"
    ];

    if (mensaje.value == "" || mensaje.value.startsWith(" ")) {

        alert("Porfavor, rellenar.")

    } else {

        let mensajeBot = mensajesRandom[Math.round(Math.random() * mensajesRandom.length - 1)];

        while (mensajeBot == undefined) {

            mensajeBot = mensajesRandom[Math.round(Math.random() * mensajesRandom.length - 1)];

        }

        document.getElementsByClassName("chats")[0].insertAdjacentHTML("beforeend", `<div class="msg">${mensaje.value}</div>`);
        document.getElementsByClassName("chats")[0].insertAdjacentHTML("beforeend", `<div class="bot">${mensajeBot}</div>`);

    }

    mensaje.value = "";
    document.getElementsByClassName("chats")[0].scrollTop = document.getElementsByClassName("chats")[0].scrollHeight;

}

document.getElementsByClassName("send")[0].addEventListener("click", enviarMensaje);
document.addEventListener("keypress", (e) => {

    if (e.key == "Enter") {

        enviarMensaje();

    }

});