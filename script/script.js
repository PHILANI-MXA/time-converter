function searchElement() {
    var min = parseInt(document
        .getElementById("min").value);

    var sec = Math.round(min / 0.01667);

    document.getElementById(
        "display").innerHTML = sec;
}