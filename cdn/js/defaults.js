// Versiunea Aplicatiei
window.onload = function() {
    document.getElementById("ver").innerHTML = "Release 〢 v2.3.2";
    document.getElementById("rawlink").value = '';
}

// Inlocuire buton cu tasta enter
function checkForEnterKey() {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("generate").click();
    }
}