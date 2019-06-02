//hello
console.log("Konsolen-Test");
//Website geladen
window.onload = function () {
    console.log("Daten wurden geladen");
    document.getElementById("button1").addEventListener("click", ChangeText1);
    document.getElementById("button3").addEventListener("click", ChangeText2);
    document.getElementById("button2").addEventListener("click", ChangeText3);
    alert("Die Seite ist geladen,wenn du auf Ok klickst");
};
//Change Text
document.getElementById("button1").addEventListener("click", ChangeText1);
function ChangeText1() {
    console.log("Button1 wurde benutzt");
    document.getElementById("button1").innerHTML = "Ich sagte doch nicht klicken";
}
document.getElementById("button2").addEventListener("click", ChangeText3);
function ChangeText3() {
    document.getElementById("button2").innerHTML = "Es reicht doch jetzt!";
    console.log("Button2 wurde ebenfalls benutzt");
}
document.getElementById("Button3").addEventListener("click", ChangeText2);
function ChangeText2() {
    document.getElementById("button3").innerHTML = "War klar das du den auch noch anklickst";
    console.log("Button3 wurde benutzt");
}
//Variablen
let var1 = 2;
var1 = 4;
//Rechnung
let a, b, c;
a = 3;
b = 8;
c = a + b;
console.log(c);
let x, y, z;
x = "Hallöchen";
y = "Wie gehts denn?";
z = x + y;
console.log(z);
let m = a + x;
console.log(m);
function Rechnung() {
    console.log(a + b);
    console.log(a + x);
}
function addElement() {
    let newText = document.createElement("p");
    let sparty = document.getElementById("button2");
    sparty.appendChild(newText);
    newText.innerHTML = "Neues Element!!!";
}
//# sourceMappingURL=script.js.map