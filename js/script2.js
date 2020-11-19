var arrayBombe = [];
console.log(arrayBombe);
// generare numeri 16 casuali da inserire nell array

while (arrayBombe.length < 5) {
  var bomb = Math.floor(Math.random() * 10) + 1;


  var elementoPresente = cambiaDuplicato(bomb, arrayBombe);
  arrayBombe.push(bomb);
  arrayBombe.sort();
}


// FUNZIONI------------------------------------------------------------
function cambiaDuplicato(elemento, array) {
    var risultato = false;
    for (var i = 0; i < array.length; i++) {
        if (elemento == array[i]) {
            risultato = true;
        }
    }
    return risultato;
}
