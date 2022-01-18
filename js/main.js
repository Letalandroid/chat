document.getElementById("send").addEventListener("click", () => {

    localStorage.setItem("username", document.getElementById("username").value);
    window.location.href = "bot/";

});