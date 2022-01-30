var theDelay = 5; /* Secunde pana apare eroarea */
var timer = setTimeout("showText()",theDelay*1000)
function showText() {
    document.getElementById("delayedText").style.visibility = "visible";
};