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
function hitung1() {
    var squareSide1 = document.getElementById("squareSide1").value;
    squareSide1 = parseFloat(squareSide1);
    var keliling = squareSide1 * squareSide1 * squareSide1 * squareSide1;
    document.getElementById("hasil1").innerHTML = "Luas persegi: " + keliling;
}
function reset() {
    document.getElementById("squareSide1").value = "";
    document.getElementById("hasil1").innerHTML = "";
}