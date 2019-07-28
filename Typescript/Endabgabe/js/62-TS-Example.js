//Arrays
let Gegner = [];
let Spieler = [];
let Kartenstapel = [];
let Ablagestapel = [];
window.onload = function () {
    document.getElementById("Kartenstapel").addEventListener("click", takeACard, false);
    generateCards();
    handOut();
    generateHTMLCards();
    alreadyPlayed();
};
//Karten werden zugeordnet
function generateCards() {
    let gelb1 = {
        kartenFarbe: "gelb",
        kartenWert: 1,
        kartenZahl: 1,
        number: 1,
    };
    Kartenstapel.push(gelb1);
    let gelb2 = {
        kartenFarbe: "gelb",
        kartenWert: 2,
        kartenZahl: 2,
        number: 2,
    };
    Kartenstapel.push(gelb2);
    let gelb3 = {
        kartenFarbe: "gelb",
        kartenWert: 3,
        kartenZahl: 3,
        number: 3,
    };
    Kartenstapel.push(gelb3);
    let gelb4 = {
        kartenFarbe: "gelb",
        kartenWert: 4,
        kartenZahl: 4,
        number: 4,
    };
    Kartenstapel.push(gelb4);
    let gelb5 = {
        kartenFarbe: "gelb",
        kartenWert: 5,
        kartenZahl: 5,
        number: 5,
    };
    Kartenstapel.push(gelb5);
    let gelb6 = {
        kartenFarbe: "gelb",
        kartenWert: 6,
        kartenZahl: 6,
        number: 6,
    };
    Kartenstapel.push(gelb6);
    let gelb7 = {
        kartenFarbe: "gelb",
        kartenWert: 7,
        kartenZahl: 7,
        number: 7,
    };
    Kartenstapel.push(gelb7);
    let gelb8 = {
        kartenFarbe: "gelb",
        kartenWert: 8,
        kartenZahl: 8,
        number: 8,
    };
    Kartenstapel.push(gelb8);
    let grün1 = {
        kartenFarbe: "grün",
        kartenWert: 1,
        kartenZahl: 1,
        number: 9,
    };
    Kartenstapel.push(grün1);
    let grün2 = {
        kartenFarbe: "grün",
        kartenWert: 2,
        kartenZahl: 2,
        number: 10,
    };
    Kartenstapel.push(grün2);
    let grün3 = {
        kartenFarbe: "grün",
        kartenWert: 3,
        kartenZahl: 3,
        number: 11,
    };
    Kartenstapel.push(grün3);
    let grün4 = {
        kartenFarbe: "grün",
        kartenWert: 4,
        kartenZahl: 4,
        number: 12,
    };
    Kartenstapel.push(grün4);
    let grün5 = {
        kartenFarbe: "grün",
        kartenWert: 5,
        kartenZahl: 5,
        number: 13,
    };
    Kartenstapel.push(grün5);
    let grün6 = {
        kartenFarbe: "grün",
        kartenWert: 6,
        kartenZahl: 6,
        number: 14,
    };
    Kartenstapel.push(grün6);
    let grün7 = {
        kartenFarbe: "grün",
        kartenWert: 7,
        kartenZahl: 7,
        number: 15,
    };
    Kartenstapel.push(grün7);
    let grün8 = {
        kartenFarbe: "grün",
        kartenWert: 8,
        kartenZahl: 8,
        number: 16,
    };
    Kartenstapel.push(grün8);
    let rot1 = {
        kartenFarbe: "rot",
        kartenWert: 1,
        kartenZahl: 1,
        number: 17,
    };
    Kartenstapel.push(rot1);
    let rot2 = {
        kartenFarbe: "rot",
        kartenWert: 2,
        kartenZahl: 2,
        number: 18,
    };
    Kartenstapel.push(rot2);
    let rot3 = {
        kartenFarbe: "rot",
        kartenWert: 3,
        kartenZahl: 3,
        number: 19,
    };
    Kartenstapel.push(rot3);
    let rot4 = {
        kartenFarbe: "rot",
        kartenWert: 4,
        kartenZahl: 4,
        number: 20,
    };
    Kartenstapel.push(rot4);
    let rot5 = {
        kartenFarbe: "rot",
        kartenWert: 5,
        kartenZahl: 5,
        number: 21,
    };
    Kartenstapel.push(rot5);
    let rot6 = {
        kartenFarbe: "rot",
        kartenWert: 6,
        kartenZahl: 6,
        number: 22,
    };
    Kartenstapel.push(rot6);
    let rot7 = {
        kartenFarbe: "rot",
        kartenWert: 7,
        kartenZahl: 7,
        number: 23,
    };
    Kartenstapel.push(rot7);
    let rot8 = {
        kartenFarbe: "rot",
        kartenWert: 8,
        kartenZahl: 8,
        number: 24,
    };
    Kartenstapel.push(rot8);
    let blau1 = {
        kartenFarbe: "blau",
        kartenWert: 1,
        kartenZahl: 1,
        number: 25,
    };
    Kartenstapel.push(blau1);
    let blau2 = {
        kartenFarbe: "blau",
        kartenWert: 2,
        kartenZahl: 2,
        number: 26,
    };
    Kartenstapel.push(blau2);
    let blau3 = {
        kartenFarbe: "blau",
        kartenWert: 3,
        kartenZahl: 3,
        number: 27,
    };
    Kartenstapel.push(blau3);
    let blau4 = {
        kartenFarbe: "blau",
        kartenWert: 4,
        kartenZahl: 4,
        number: 28,
    };
    Kartenstapel.push(blau4);
    let blau5 = {
        kartenFarbe: "blau",
        kartenWert: 5,
        kartenZahl: 5,
        number: 29,
    };
    Kartenstapel.push(blau5);
    let blau6 = {
        kartenFarbe: "blau",
        kartenWert: 6,
        kartenZahl: 6,
        number: 30,
    };
    Kartenstapel.push(blau6);
    let blau7 = {
        kartenFarbe: "blau",
        kartenWert: 7,
        kartenZahl: 7,
        number: 31,
    };
    Kartenstapel.push(blau7);
    let blau8 = {
        kartenFarbe: "blau",
        kartenWert: 8,
        kartenZahl: 8,
        number: 32,
    };
    Kartenstapel.push(blau8);
    Kartenstapel.sort(function (a, b) {
        return 0.5 - Math.random();
    });
}
function handOut() {
    for (let i = 0; i < 5; i++) {
        Spieler.push(Kartenstapel[0]);
        Kartenstapel.splice(0, 1);
        Gegner.push(Kartenstapel[0]);
        Kartenstapel.splice(0, 1);
    }
    Ablagestapel.push(Kartenstapel[0]);
    Kartenstapel.splice(0, 1);
    generateHTMLCards();
}
function takeACard() {
    if (Kartenstapel.length > 0) {
        Spieler.push(Kartenstapel[0]);
        Kartenstapel.splice(0, 1);
        Gegnerzug();
    }
    generateHTMLCards();
}
function playingCards(Kartennummer) {
    if (Spieler[Kartennummer].kartenFarbe == Ablagestapel[Ablagestapel.length - 1].kartenFarbe || Spieler[Kartennummer].kartenWert == Ablagestapel[Ablagestapel.length - 1].kartenWert) {
        Ablagestapel.push(Spieler[Kartennummer]);
        Spieler.splice(Kartennummer, 1);
        Gegnerzug();
    }
    else {
        alert("✌");
    }
    if (Spieler.length == 0) {
        alert("Du hast gewonnen!!!");
        window.location.reload(true);
    }
}
function alreadyPlayed() { }
function Gegnerzug() {
    let alreadyPlayed = false;
    for (let m = 0; m < Gegner.length; m++)
        if (Gegner[m].kartenFarbe == Ablagestapel[Ablagestapel.length - 1].kartenFarbe || Gegner[m].kartenWert == Ablagestapel[Ablagestapel.length - 1].kartenWert) {
            Ablagestapel.push(Gegner[m]);
            Gegner.splice(m, 1);
            alreadyPlayed = true;
            generateHTMLCards();
            break;
        }
}
if (Kartenstapel.length > 0 && alreadyPlayed == false) {
    Gegner.push(Kartenstapel[0]);
    Kartenstapel.splice(0, 1);
    generateHTMLCards();
}
//if(Gegner.length==0){
//alert("Verloren!");}
let cardsHolderPlayer = "Spieler";
function newFunction() {
    return alreadyPlayed == false;
}
function generateHTMLCards() {
    for (let i = 0; i < Spieler.length; i++) {
        let holdingDiv = document.createElement("div");
        holdingDiv.setAttribute("class", "Card");
        holdingDiv.setAttribute("class", Spieler[i].kartenFarbe + "");
        holdingDiv.addEventListener("click", function () { playingCards(i); }, false);
        document.getElementById(cardsHolderPlayer).appendChild(holdingDiv);
        let kartenWertigkeit = document.createElement("p");
        kartenWertigkeit.innerHTML = Spieler[i].kartenZahl;
        holdingDiv.appendChild(kartenWertigkeit);
        let switchedKartenWert = document.createElement("p");
        switchedKartenWert.innerHTML = Spieler[i].kartenZahl;
        holdingDiv.appendChild(switchedKartenWert);
    }
    for (let w = 0; w < Gegner.length; w++) {
        let holdingDiv = document.createElement("div");
        holdingDiv.setAttribute("class", "VerdeckteKarte");
        document.getElementById("Computer").appendChild(holdingDiv);
    }
    let holdingDiv = document.createElement("div");
    holdingDiv.setAttribute("class", Ablagestapel[Ablagestapel.length - 1].kartenFarbe + "");
    document.getElementById("Ablagestapel").appendChild(holdingDiv);
    let kartenWert = document.createElement("p");
    kartenWert.innerHTML = Ablagestapel[Ablagestapel.length - 1].kartenZahl;
    holdingDiv.appendChild(kartenWert);
    let switchedKartenWert = document.createElement("p");
    switchedKartenWert.innerHTML = Ablagestapel[Ablagestapel.length - 1].kartenZahl;
    holdingDiv.appendChild(switchedKartenWert);
}
//# sourceMappingURL=62-TS-Example.js.map