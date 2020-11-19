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
console.log(bombs);

while (bombs.length < 16) {
  // genera numeri casuali (bomb) casuali
    var bomb = Math.floor(Math.random() * 100) + 1;
    // I numeri non possono essere duplicati.
    var elementoPresente = checkDuplicati(bomb, bombs);
    if (elementoPresente == false) {
      bombs.push(bomb);
      bombs.sort();
    }
}

// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
var numeriUtente = [];
console.log(numeriUtente);
var giocate = 4;
var giocateSbagliate = 0;
while (numeriUtente.length < giocate) {

      var mossaUtente = parseInt(prompt("Inserisci un numero da 1 a 100"));
      if (isNaN(mossaUtente)) { // se l'utente non inserisce un numero
        alert("Attenzione Inserisci un numero!!");
        giocate = giocate + 1;
        giocateSbagliate = giocateSbagliate + 1;
      } else if ((mossaUtente <= 0) || (mossaUtente > 100)) { //se l'utente inserisce numeri superiori o inferiori
        alert("Attenzione Inserisci un numero superiore a 0 e inferiore a 100!!");
        giocate = giocate + 1;
        giocateSbagliate = giocateSbagliate + 1;
      }
      // I numeri non possono essere duplicati.
      var elementoPresenteUtente = checkDuplicati(mossaUtente, numeriUtente);
      if (elementoPresenteUtente == false) {
          numeriUtente.push(mossaUtente);
          numeriUtente.sort();
      } else { // L’utente non può inserire più volte lo stesso numero.
        alert("Questo numero è già stato inserito. Riprova!");
      }
      // Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
      var messaggio = "";
      var game = checkDuplicati(mossaUtente, bombs);
      if (game == true) {
         messaggio = "Hai Perso";
         break
      } else {
        messaggio = "Hai Vinto";
      }
}
var punteggio = numeriUtente.length - giocateSbagliate;
var risultato = messaggio;
console.log("Punteggio", punteggio);
console.log(messaggio);


// FUNZIONI--------------------------------------------------------------
function checkDuplicati(elemento, array) {
      var risultato = false;
      for (var i = 0; i < array.length; i++) {
        if (elemento == array[i]) {
          risultato = true;
        }
      }
      return risultato;
}
