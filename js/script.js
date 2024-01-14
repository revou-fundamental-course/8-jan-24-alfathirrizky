function hitung() {
    var squareSide = document.getElementById("squareSide").value;
    squareSide = parseFloat(squareSide);
    var luas = squareSide * squareSide;
    document.getElementById("hasil").innerHTML = "Luas persegi: " + luas;
}
function reset() {
    document.getElementById("squareSide").value = "";
    document.getElementById("hasil").innerHTML = "";
}