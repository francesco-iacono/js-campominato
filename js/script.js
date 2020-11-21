// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.-
// L’utente non può inserire più volte lo stesso numero.-
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50


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

var bottoneLevel = document.getElementById('level');
bottoneLevel.addEventListener( 'click',

function () {
  var difficoltà = document.getElementById("livello").value;
  var numeroMax = 100;
  console.log(numeroMax);

  switch (difficoltà) {
    case "easy":
      numeroMax = 50;
    break;
    case "normal":
      numeroMax = 80;
    break;
    default:
      numeroMax = 100;
  }
  var partiteDaGiocare = numeroMax - 16;
  console.log(numeroMax);
  console.log(partiteDaGiocare);

  // In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.

  var bottoneGenera = document.getElementById('gioca');
  bottoneGenera.addEventListener( 'click',

  function () {
    var numeriUtente = [];

    var perso = false;
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
          // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
          var messaggio = "WINNER";
          var game = checkDuplicati(mossaUtente, bombs);
          if (game == true) {
              perso = true;
              messaggio = "GAME <br> OVER";
              var gameOver = document.getElementById('img-WG');
              gameOver.className += 'show';
          } else if (!isNaN(mossaUtente) && (mossaUtente >= 1) && (mossaUtente < 100) && (game == false) && (elementoPresenteUtente == false)) {
            numeriUtente.push(mossaUtente);
            document.getElementById('numeri-giocati').innerHTML += "<li>" + mossaUtente + "</li>";
            punteggio++;
          } else if (elementoPresenteUtente == true) { // il numero del utente è già presente
            alert("Questo numero è già stato inserito. Riprova!");
          }
    }
    document.getElementById('punteggio').innerHTML += punteggio;
    document.getElementById('risultato').innerHTML += messaggio;
    console.log("numeriUtente", numeriUtente);
    console.log("Punteggio", punteggio);
    console.log(messaggio);
    if (messaggio == "WINNER") {
      var gameOver = document.getElementById('img-WG');
      gameOver.className = 'img-winner';
    }
    }
  );
  // play show
      var bottonePlay = document.getElementById('gioca');
      bottonePlay.className = 'show';
      // tab Punteggio
      var tabPunteggio = document.getElementById('tab-punteggio');
      tabPunteggio.className += 'show';
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
