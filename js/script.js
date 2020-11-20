// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.-
// L’utente non può inserire più volte lo stesso numero.-
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali tra 1 e 100.
// Creare Math.random per generare 16 numeri casuali
var bombs = [];

while (bombs.length < 16) {
  // genera numeri casuali (bomb) casuali
    var bomb = numeriRandom(1, 100);
    // I numeri non possono essere duplicati.
    var elementoPresente = checkDuplicati(bomb, bombs);
    if (elementoPresente == false) {
      bombs.push(bomb);
    }
}
console.log(bombs);
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

var bottoneGenera = document.getElementById('gioca');
bottoneGenera.addEventListener( 'click',

function functionName() {
  var numeriUtente = [];

  var perso = false;
  var partiteDaGiocare = 4;
  var punteggio = 0;
  while (numeriUtente.length < partiteDaGiocare && perso == false) {

        var mossaUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
        if (isNaN(mossaUtente)) { // se l'utente non inserisce un numero
            alert("Attenzione Inserisci un numero!!");
        } else if ((mossaUtente <= 0) || (mossaUtente > 100)) { //se l'utente inserisce numeri superiori o inferiori
            alert("Attenzione Inserisci un numero superiore a 0 e inferiore a 100!!");
        }
        // I numeri non possono essere duplicati.
        var elementoPresenteUtente = checkDuplicati(mossaUtente, numeriUtente);
        if (elementoPresenteUtente == true) {                                // L’utente non può inserire più volte lo stesso numero.
          alert("Questo numero è già stato inserito. Riprova!");
        } else
        // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
        var messaggio = "Hai vinto";
        var game = checkDuplicati(mossaUtente, bombs);
        if (game == true) {
            perso = true;
            messaggio = "Hai Perso";
        } else if (!isNaN(mossaUtente) && (mossaUtente >= 0) && (mossaUtente < 100) && (game == false) && (elementoPresenteUtente == false)) {
          numeriUtente.push(mossaUtente);
          document.getElementById('numeri-giocati').innerHTML += "<li>" + mossaUtente + "</li>";
          punteggio++;
        }
  }
  console.log("numeriUtente", numeriUtente);
  console.log("Punteggio", punteggio);
  console.log(messaggio);
  }
);





// FUNZIONI--------------------------------------------------------------
function numeriRandom(min, max) {
        var risultato = Math.floor(Math.random() * (max - min + 1) + min);
        return risultato;
}

function checkDuplicati(elemento, array) {
      var risultato = false;
      for (var i = 0; i < array.length; i++) {
        if (elemento == array[i]) {
            risultato = true;
        }
      }
      return risultato;
}
