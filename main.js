let text = document.querySelector("h1");
let list = document.querySelector("ul");
let but = document.querySelector("button");

window.onload = function () {
    if (window.navigator.onLine) {
        online();
    }
    else {
        Offline()
    }
}

function online() {
    text.innerHTML = `Online now`;
    text.style.color = "green";
    list.classList.add("hide");
    but.classList.add("hide");

}

function Offline() {
    text.innerHTML = `Offline Internet`;
    list.classList.remove("hide");
    but.classList.remove("hide");


}
but.onclick = function () {
    window.location.reload();
}
window.addEventListener("online", function () { console.log("online"); online(); });
window.addEventListener("offline", function () { console.log("offline"); Offline(); });

