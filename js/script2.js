
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

function () {
  var numeriUtente = [];

  var perso = false;
  var partiteDaGiocare = 4;
  var punteggio = 0;

  if (numeriUtente.length < partiteDaGiocare && perso == false) {

    var mossaUtente = document.getElementById('numero').value;

    var elementoPresenteUtente = checkDuplicati(mossaUtente, numeriUtente);
    console.log("Elemento PresenteUtente", elementoPresenteUtente);
      numeriUtente.push( "Mossa Utente", mossaUtente);
      console.log(mossaUtente);

  }
  console.log(numeriUtente);
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
