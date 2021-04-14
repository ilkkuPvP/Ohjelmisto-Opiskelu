function javaScript() {
//document.getElementById("TEHTÄVÄNUM").innerHTML = ;

//---------
//Yleiset muuttujat
  var sanaScrabble = document.getElementById("textScrabble").value; //T1

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

//Yritykseni ennenkuin tajusin, että switch on hyvä työkalu :D
//--
//  var sanaTaulukko = Array.from(sanaScrabble);
//  var taulukko1p = ["a", "e", "i", "n", "s", "t", "A", "E", "I", "N", "S", "T"];
//--

//---------
// Tehtävä 2



//
}
