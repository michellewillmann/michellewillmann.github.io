window.onload = function () {
    document.getElementById("Kartendeck").addEventListener("click", ziehe, false);
    generierekarten();
  
  
    spielstart();
    HTML();
  }
  
  
  
  
  ////////// ARRAYS /////////////////////////////////////////                                                                                                                  (ง ° ل͜ °)ง 
  
  let Kartendeck: Stapel[] = [];         //Der Array für das Kartendeck
  let Ablage: Stapel[] = [];       // Ablage Array
  let Gegner: Stapel[] = [];     //Gegnerkarten Array
  let Spieler: Stapel[] = [];       //Eigene Karten Array   
  
  
  //////////Karten Interface////////
  interface Stapel {
    kartenfarbe: string;
    kartennummer: number;
    img: string;
  }
  
  
  
  
  
  ////////////////Funktionen////////////////////////////////////////////
  
  
  
  function generierekarten() {          //KArten werdn ins Kartendeck gepusht!//
  
    let r1: Stapel = {
      kartenfarbe: "rot",       //Farbe der Karte
      kartennummer: 1,          //Nummer der Karte
      img: "img/r1.jpg"       //Bildquelle der Karte
    };
    Kartendeck.push(r1);
  
    let r2: Stapel = {    //Hier die roten Karten
      kartenfarbe: "rot",
      kartennummer: 2,
      img: "img/r2.jpg"
    };
    Kartendeck.push(r2);
  
    let r3: Stapel = {
      kartenfarbe: "rot",
      kartennummer: 3,
      img: "img/r3.jpg"
    };
    Kartendeck.push(r3);
  
    let r4: Stapel = {
      kartenfarbe: "rot",
      kartennummer: 4,
      img: "img/r4.jpg"
    };
    Kartendeck.push(r4);
  
    let r5: Stapel = {
      kartenfarbe: "rot",
      kartennummer: 5,
      img: "img/r5.jpg"
    };
    Kartendeck.push(r5);
  
    let r6: Stapel = {
      kartenfarbe: "rot",
      kartennummer: 6,
      img: "img/r6.jpg"
    };
    Kartendeck.push(r6);
  
    let r7: Stapel = {
      kartenfarbe: "rot",
      kartennummer: 7,
      img: "img/r7.jpg"
    };
    Kartendeck.push(r7);
  
    let r8: Stapel = {
      kartenfarbe: "rot",
      kartennummer: 8,
      img: "img/r8.jpg"
    };
    Kartendeck.push(r8);
  
    let ge1: Stapel = {            //Hier die gelben Karten
      kartenfarbe: "gelb",
      kartennummer: 1,
      img: "img/gelb1.jpg"
    };
    Kartendeck.push(ge1);
  
    let ge2: Stapel = {
      kartenfarbe: "gelb",
      kartennummer: 2,
      img: "img/gelb2.jpg"
    };
    Kartendeck.push(ge2);
  
    let ge3: Stapel = {
      kartenfarbe: "gelb",
      kartennummer: 3,
      img: "img/gelb3.jpg"
    };
    Kartendeck.push(ge3);
  
    let ge4: Stapel = {
      kartenfarbe: "gelb",
      kartennummer: 4,
      img: "img/gelb4.jpg"
    };
    Kartendeck.push(ge4);
  
    let ge5: Stapel = {
      kartenfarbe: "gelb",
      kartennummer: 5,
      img: "img/gelb5.jpg"
    };
    Kartendeck.push(ge5);
  
    let ge6: Stapel = {
      kartenfarbe: "gelb",
      kartennummer: 6,
      img: "img/gelb6.jpg"
    };
    Kartendeck.push(ge6);
  
    let ge7: Stapel = {
      kartenfarbe: "gelb",
      kartennummer: 7,
      img: "img/gelb7.jpg"
    };
    Kartendeck.push(ge7);
  
    let ge8: Stapel = {
      kartenfarbe: "gelb",
      kartennummer: 8,
      img: "img/gelb8.jpg"
    };
    Kartendeck.push(ge8);
  
    let gr1: Stapel = {                   //Hier die grünen Karten
      kartenfarbe: "grün",
      kartennummer: 1,
      img: "img/gruen1.jpg"
    };
    Kartendeck.push(gr1);
  
    let gr2: Stapel = {
      kartenfarbe: "grün",
      kartennummer: 2,
      img: "img/gruen2.jpg"
    };
    Kartendeck.push(gr2);
  
    let gr3: Stapel = {
      kartenfarbe: "grün",
      kartennummer: 3,
      img: "img/gruen3.jpg"
    };
    Kartendeck.push(gr3);
  
    let gr4: Stapel = {
      kartenfarbe: "grün",
      kartennummer: 4,
      img: "img/gruen4.jpg"
    };
    Kartendeck.push(gr4);
  
    let gr5: Stapel = {
      kartenfarbe: "grün",
      kartennummer: 5,
      img: "img/gruen5.jpg"
    };
    Kartendeck.push(gr5);
  
    let gr6: Stapel = {
      kartenfarbe: "grün",
      kartennummer: 6,
      img: "img/gruen6.jpg"
    };
    Kartendeck.push(gr6);
  
    let gr7: Stapel = {
      kartenfarbe: "grün",
      kartennummer: 7,
      img: "img/gruen7.jpg"
    };
    Kartendeck.push(gr7);
  
    let gr8: Stapel = {
      kartenfarbe: "grün",
      kartennummer: 8,
      img: "img/gruen8.jpg"
    };
    Kartendeck.push(gr8);
  
    let b1: Stapel = {                //Hier die blauen Karten
      kartenfarbe: "blau",
      kartennummer: 1,
      img: "img/bla1.jpg"
    };
    Kartendeck.push(b1);
  
    let b2: Stapel = {
      kartenfarbe: "blau",
      kartennummer: 2,
      img: "img/bla2.jpg"
    };
    Kartendeck.push(b2);
  
    let b3: Stapel = {
      kartenfarbe: "blau",
      kartennummer: 3,
      img: "img/bla3.jpg"
    };
    Kartendeck.push(b3);
  
    let b4: Stapel = {
      kartenfarbe: "blau",
      kartennummer: 4,
      img: "img/bla4.jpg"
    };
    Kartendeck.push(b4);
  
    let b5: Stapel = {
      kartenfarbe: "blau",
      kartennummer: 5,
      img: "img/bla5.jpg"
    };
    Kartendeck.push(b5);
  
    let b6: Stapel = {
      kartenfarbe: "blau",
      kartennummer: 6,
      img: "img/bla6.jpg"
    };
    Kartendeck.push(b6);
  
    let b7: Stapel = {
      kartenfarbe: "blau",
      kartennummer: 7,
      img: "img/bla7.jpg"
    };
    Kartendeck.push(b7);
  
    let b8: Stapel = {
      kartenfarbe: "blau",
      kartennummer: 8,
      img: "img/bla8.jpg"
    };
    Kartendeck.push(b8);
  
    Kartendeck.sort(function (a, b) { return 0.5 - Math.random() });      //Kartendeck wird gemischt
  
    console.log("Kartendeck wird gemischt.") // Konsolenausgabe
  }
  
  
  
  
  /////////////////GAME START/////////////////////
  
  function spielstart() {                                //Fünf Karten werden an Gegner und Spieler verteilt und aus dem Stapel entfernt
    for (let i = 0; i < 5; i++) {
      Gegner.push(Kartendeck[0]);
      Kartendeck.splice(0, 1);
      Spieler.push(Kartendeck[0]);
      Kartendeck.splice(0, 1);
    }
    Ablage.push(Kartendeck[0]);                           // Karte vom Stapel auf Ablage legen
    Kartendeck.splice(0, 1);
  
  }
  
  
  
  
  function HTML() {
    document.getElementById("Spieler").innerHTML = "";                           //Die Spielerkarten  wird in Html generiert
    for (let i: number = 0; i <= Spieler.length - 1; i++) {
      let spielerkarten: HTMLImageElement = document.createElement("img");
      spielerkarten.innerHTML = "";
      spielerkarten.setAttribute("src", Spieler[i].img);
      spielerkarten.addEventListener("click", function () { playCard(i); }, false);
      document.getElementById("Spieler").appendChild(spielerkarten);
    }
  
    document.getElementById("Kartendeck").innerHTML = "";                             //Kartendeck wird Html wird generiert
    let deckKarte: HTMLImageElement = document.createElement("img");
    deckKarte.setAttribute("src", "img/card.jpg");
    document.getElementById("Kartendeck").appendChild(deckKarte);
  
  
  
    document.getElementById("Gegner").innerHTML = "";                         //Gegnerkarten HTML generiert
    for (let i: number = 0; i <= Gegner.length - 1; i++) {
      let gegnerkar: HTMLImageElement = document.createElement("img");
      gegnerkar.innerHTML = "";
      gegnerkar.setAttribute("src", "img/card.jpg");
      document.getElementById("Gegner").appendChild(gegnerkar);
    }
  
  
  
    document.getElementById("Ablage").innerHTML = "";
    let ablageCard: HTMLImageElement = document.createElement("img");           //Ablagestapel HTML generiert
    ablageCard.innerHTML = "";
    ablageCard.setAttribute("src", Ablage[Ablage.length - 1].img);
    document.getElementById("Ablage").appendChild(ablageCard);
  }
  
  
  
  function ziehe() {                                        //Die Funktion für Karten ziehen ,Karten aus dem Deck gelöscht und ins Spieler Array gepusht
    Spieler.push(Kartendeck[0]);
    Kartendeck.splice(0, 1);
    HTML();
    gegnerspielt();
    console.log("Karte wurde gezogen");
  }
  
  
  
  function playCard(klickkarte: number) {
    if (Spieler[klickkarte].kartenfarbe == Ablage[Ablage.length - 1].kartenfarbe || Spieler[klickkarte].kartennummer == Ablage[Ablage.length - 1].kartennummer) {           //Es wird geschaut ob die Karte legbar ist(von den Spielregeln her: gleiche Farbe o. gleiche Zahl)
  
      Ablage.push(Spieler[klickkarte]);     // Hier wird in die Ablage Array gepusht
      Spieler.splice(klickkarte, 1);        // Array: Spieler-> Karte wird aus diesem Array gelöscht
      HTML();
      if (Spieler.length == 0) {
        alert("Yeah du hast den Gegner besiegt und gewonnen!!!");             //Wenn der Spieler gewinnt wird dieses Alert angezeigt, dass er gewonnen hat-       
      }
      if (Gegner.length == 0) {
        alert("Leider verloren. Spiele nochmal!!!");                    //Und wenn er verliert kommt , dass er verloren hat
      }
      gegnerspielt();
    }
  
    console.log("Karte wurde gespielt")    //Text in Konsolenausgabe
  
  }
  
  //Der Gegner(Computer) schaut im Array der Reihe nach Karten und prüft. Stimmt die Nummer oder  Farbe mit der Karte auf dem Ablagestapel, legt der Computer die Karte ab
  
  
  function gegnerspielt() {
  
    let spieleyn: boolean = false;
    for (let i: number = 0; i < Gegner.length; i++) {
      if (Gegner[i].kartenfarbe == Ablage[Ablage.length - 1].kartenfarbe ||
        Gegner[i].kartennummer == Ablage[Ablage.length - 1].kartennummer) {
        Ablage.push(Gegner[i]);
        Gegner.splice(i, 1);
        HTML();
        spieleyn = true;
        break;
      }
    }
    if (spieleyn == false) {                       //Bei nicht spielen wird Karte gezogen
      Gegner.push(Kartendeck[0]);
      Kartendeck.splice(0, 1);
      HTML();
    }
  }                                                                                                                                                               //(ง ° ل͜ °)ง                                                      
  