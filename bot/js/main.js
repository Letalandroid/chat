document.getElementsByTagName("h1")[0].innerHTML = `${localStorage.getItem("username")}'s Chat`;

const enviarMensaje = () => {

    let mensaje = document.getElementById("msg");

    if (mensaje.value == "" || mensaje.value.startsWith(" ")) {

        alert("Porfavor, rellenar.")

    } else {

        document.getElementsByClassName("chats")[0].insertAdjacentHTML("beforeend", `<div class="msg">${mensaje.value}</div>`);

    }

    mensaje.value = "";

}

document.getElementsByClassName("send")[0].addEventListener("click", enviarMensaje);
document.addEventListener("keypress", (e) => {

    if (e.key == "Enter") {

        enviarMensaje();

    }

});