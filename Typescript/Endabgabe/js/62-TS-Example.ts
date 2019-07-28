interface Karte{
    kartenFarbe:string;
    kartenWert:number;
}

//Arrays
let Gegner:Karte []=[];
let Spieler:Karte[]=[];
let Kartenstapel:Karte[]=[];
let Ablagestapel:Karte[]=[];

window.onload=function(){
 document.getElementById("Kartenstapel").addEventListener("click",mischenUndNehmen,false);
 GameStart(); 
}
//Funktionen
function mischenUndNehmen(){
    ClearAll();
    generateKartenstapel();
    Kartenstapel=shuffle(Kartenstapel);
}
function GameStart(){
    Gegner=[]; 
    Spieler=[];
    Kartenstapel=[]; 
    Ablagestapel=[];
    KarteGenerate();

for(let i=0;i<5;i++){
    Gegner.push(Kartenstapel[i+5]);
    Spieler.push(Kartenstapel[i]);
}
Kartenstapel.splice(0,11);
Ablagestapel.push(Kartenstapel[10]);

updateHTML("Gegner");
updateHTML("Spieler");
updateHTML("Kartenstapel");
updateHTML("Ablagestapel");
}
function KarteHTML(karte:Karte,Zielort:string,index:number){
    let holdingDiv:HTMLElement=document.createElement("div");
    holdingDiv.setAttribute("class","Karte"+""+karte.kartenFarbe);
    document.getElementById(Zielort).appendChild(holdingDiv);

    let Zahl:HTMLElement=document.createElement("p");
    Zahl.setAttribute("class","Kartennummer");
    Zahl.innerHTML=""+karte.kartenWert;
    holdingDiv.appendChild(Zahl);

    if(Zielort=="Spieler"){
        holdingDiv.addEventListener("click",function(){KarteLegen(karte,index)},false);
    }
}

function KarteVerdeckt(karte:Karte,Zielort:string,index:number){
    let holdingDiv:HTMLElement=document.createElement("div");
    holdingDiv.setAttribute("class","Karte"+""+"Verdeckt");
    document.getElementById(Zielort).appendChild(holdingDiv);
}

function KarteLegen(karte:Karte,index:number){
    if(karte.kartenFarbe==Ablagestapel[Ablagestapel.length-1].kartenFarbe || karte.KartenWert==Ablagestapel[Ablagestapel.length-1].kartenWert){
    Ablagestapel.push(karte);
    Spieler.splice(index,1);
    updateHTML("Spieler");
    updateHTML("Ablagestapel");
    
    if(Spieler.length==0){
        window.alert("Du hast gewonnen!");
        GameStart();
    }
    else{ 
        Gegnerzug();
    }
  } 
}

function KarteNehmen(){
    if(checkKarten(Spieler)==false){
        Spieler.push(Kartenstapel[Kartenstapel.length-1]);
        Kartenstapel.splice(Kartenstapel.length-1,1);
        updateHTML("Spieler");
        updateHTML("Kartenstapel");
    }
    if(checkKarten(Spieler)==false){
        Gegnerzug();
    }
}
function Gegnerzug(){
    let i=0;
    for(i;i<Gegner.length;i++){
        if(Gegner[i].kartenFarbe==Ablagestapel[Ablagestapel.length-1].kartenFarbe || Gegner[i].kartenWert==Ablagestapel[Ablagestapel.length-1].kartenWert){
            Ablagestapel.push(Gegner[i]);
            Gegner.splice(i,1);
            updateHTML("Ablagestapel");
            updateHTML("Gegner");
            break;
        }
    }
    if(Gegner.length==0){
        window.alert("Du hast verloren!");
        GameStart();
    }
    else if(i>=Gegner.length){
        Gegner.push(Kartenstapel[Kartenstapel.length-1]);
        Kartenstapel.splice(Kartenstapel.length-1,1);
        updateHTML("Gegner");
        updateHTML("Kartenstapel");
        if(Gegner[Gegner.length-1].kartenFarbe==Ablagestapel[Ablagestapel.length-1].kartenFarbe || Gegner[Gegner.length-1].kartenWert==Ablagestapel[Ablagestapel.length-1].kartenWert){
            Ablagestapel.push(Gegner[Gegner.length-1]);
            Gegner.splice(Gegner.length-1,1);
            updateHTML("Ablagestapel");
            updateHTML("Gegner");
        }
    }
}

function checkKarten(array:Karte[]):boolean{
    for(let i=0; i<array.length;i++){
        if(array[i].kartenFarbe==Ablagestapel[Ablagestapel.length-1].kartenFarbe || array[i].kartenWert==Ablagestapel[Ablagestapel.length-1].kartenWert){
            passendeKarte=true;
            break;
        }
    }
    return passendeKarte;
}
 function updateHTML(Zielort:string){
    ClearHTML(Zielort);
    if (Zielort=="Spieler"){
        for (let i=0;i<Spieler.length;i++){
            HTMLKarte(Spieler[i],"Spieler",i);
        }
    }
    if (Zielort=="Gegner"){
        for(let i=0;i<Gegner.length;i++){
            KarteVerdeckt(Gegner[i],"Gegner",i);
        }
    }
    if(Zielort=="Ablagestapel"){
        HTMLKarte(Ablagestapel[Ablagestapel.length-1],"Ablagestapel", Ablagestapel.length-1);   
    }
    if(Zielort=="Kartenstapel"){
        KarteVerdeckt(Kartenstapel[Kartenstapel.length-1],"Kartenstapel",Kartenstapel.length-1);
    }
}

function ClearHTML(Zielort:string){
    let Element:HTMLElement=document.getElementById(Zielort);
    while(Element.firstChild){
        Element.removeChild(Element.firstChild);
    }
}

function KarteGenerate(){
    let Farbe:string;
    for(let i=1;i<=8;i++){
        for(let j=1;j<=4;j++){
            if(j==1){
                Farbe="Blau"
            }
            else if(j==2){
                Farbe="Rot"
            }
            else if(j==3){
                Farbe="Gelb"
            }
            else if(j==4){
                Farbe="Grün"
            }
            let KarteNew:Karte={
                kartenFarbe:Farbe,
                kartenWert:i
            }
            Kartenstapel.push(KarteNew);
        }
    }
}
console.log(Kartenstapel);

function shuffle(array:Karte[]){
    let currentIndex=array.length;
    let temporaryValue;
    let randomIndex;
    while(currentIndex!=0){
        randomIndex=Math.floor(Math.random()*currentIndex);
        currentIndex-=1;
        temporaryValue=array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex]=temporaryValue;
    }
    return array;
}
