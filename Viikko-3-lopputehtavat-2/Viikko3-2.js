function javaScript() {
//document.getElementById("TEHTÄVÄNUM").innerHTML = ;

//---------
//Yleiset muuttujat
  var sanaScrabble = document.getElementById("textScrabble").value; //T1

  var lottoInput = document.getElementById("textLottoInput").value;

//---------
// Tehtävä 1
var pisteet = 0;
for (var i = 0; i < sanaScrabble.length; i++) {

  switch (sanaScrabble[i]) {
    case "A":
    case "E":
    case "I":
    case "N":
    case "S":
    case "T":
    case "a":
    case "e":
    case "i":
    case "n":
    case "s":
    case "t":
      pisteet += 1;
    break;

    case "O":
    case "Ä":
    case "K":
    case "L":
    case "o":
    case "ä":
    case "k":
    case "l":
      pisteet += 2;
    break;

    case "U":
    case "M":
    case "u":
    case "m":
      pisteet += 3;
    break;

    case "Y":
    case "H":
    case "J":
    case "P":
    case "R":
    case "V":
    case "y":
    case "h":
    case "j":
    case "p":
    case "r":
    case "v":
      pisteet += 4;
    break;

    case "Ö":
    case "D":
    case "ö":
    case "d":
      pisteet += 7;
    break;

    case "B":
    case "F":
    case "G":
    case "b":
    case "f":
    case "g":
      pisteet += 8;
    break;

    case "C":
    case "c":
      pisteet += 10;
    break;

    default:
      pisteet += 12;
    break;
  }
}
document.getElementById("vastaus1").innerHTML = "Valitsemasi sanan " + "\"" + sanaScrabble + "\" pisteet ovat " + pisteet;

//Osa yrityksestäni ennenkuin tajusin, että switch voisi kokeilla :D
//--
//  var sanaTaulukko = Array.from(sanaScrabble);
//  var taulukko1p = ["a", "e", "i", "n", "s", "t", "A", "E", "I", "N", "S", "T"];
//--

//---------
// Tehtävä 2
var lottoNums = [];

var min = Math.ceil(1);
var max = Math.floor(40);
for (var i = 1; i <= 7; i++) {
  lottoNums.push(Math.floor(Math.random() * (max - min) + min));
}

//Tässä pieni BONUS tehtävään 2 :D
lottoInput = parseInt(lottoInput);

if (lottoNums.includes(lottoInput)) {
  document.getElementById("vastaus2_2").innerHTML = "Aivan mahtavaa! Sait arvattua vähintään yhden arvotun numeron!";
}
else {
  document.getElementById("vastaus2_2").innerHTML = "Valitettavasti arvasit väärin. Parempi onni ensi kerralla!"
}
//BONUS Loppuu tähän

vastaus2 = lottoNums;
document.getElementById("vastaus2_1").innerHTML = vastaus2;


//
}
