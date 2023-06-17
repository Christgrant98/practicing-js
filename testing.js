let mySaying;
mySaying = 'Life is a lottery, and the cards are marked';
let mySayingLength = mySaying.length;
let ninthLetter = mySaying.charAt(8);
let lastLetter = mySaying.charAt(mySayingLength - 1);

console.log("mySaying: " + mySaying);
console.log("mySayingLength: " + mySayingLength);
console.log("ninthLetter: " + ninthLetter);
console.log("lastLetter: " + lastLetter);

let indexPalabra = mySaying.indexOf('que');

while (indexPalabra < 0) {
  indexPalabra = mySaying.indexOf('otra preposición', indexPalabra + 1);
}

console.log("indexPalabra: " + indexPalabra);

if (indexPalabra >= 0) {
  let nuevaFrase = mySaying.substring(0, indexPalabra) + 'xxx' + mySaying.substring(indexPalabra + 3);
  console.log("nuevaFrase: " + nuevaFrase);
} else {
  console.log("No se encontró ninguna preposición en la frase.");
}

let refranMayusculas = mySaying.toUpperCase();

console.log("refranMayusculas: " + refranMayusculas);
