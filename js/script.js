// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.


// Il computer deve generare 16 numeri casuali tra 1 e 100.
// Creare Math.random per generare 16 numeri casuali
var bombs = [];
bombs.sort();
console.log(bombs);

while (bombs.length < 16) {
  // genera bombe casuali
    var bomb = Math.floor(Math.random() * 100) + 1;
    bombs.push(bomb);
    bombs.sort();
    // console.log(bombs);

    // var elementoPresente = checkDuplicati(bomb, bombs);
    // if (elementoPresente == false) {
    //   bombs.push(bomb);
    // }
}
// I numeri non possono essere duplicati.
// Cambiare i numeri uguali

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
