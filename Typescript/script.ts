//hello
console.log("Konsolen-Test");

//Website geladen
window.onload = pageLoaded
function pageLoaded (){
    alert("Die Seite ist geladen");
}
//Inhalt eines Buttons ändern
document.getElementById("Button1a").addEventListener("click", ChangeText1);
function ChangeText1 (){
    console.log("Button1 wurde benutzt");
    document.getElementById ("button1").innerHTML="Ich sagte doch nicht drücken";
}

//Klasse ändern
document.getElementById("Button3").addEventListener("click",ChangeClass);
function ChangeClass(){
    document.getElementById("button3").className="neue Klasse";
    console.log("Neuer Klassenname:"+ document.getElementById("button3").className);

}
//Variablen
let var1: number=2
var1=4

//Rechnung
let a:number, b:number, c:number;
a=3
b=8
c=a+b;
console.log(c)

let x:string, y:string, z:string;
x= "Hallöchen"
y= "Wie gehts denn?"
z= x+y;
console.log(z)

let m= a+x
console.log(m)
function Rechnung(){
    console.log(a+b)
    console.log(a+x)
}
