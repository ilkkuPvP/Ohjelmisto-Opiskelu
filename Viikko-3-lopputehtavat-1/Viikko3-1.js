function javaScript() {
//---------
//Yleiset muuttujat
  var pariLuku = parseInt(document.getElementById("textPariLuku").value); //T1
  var salasanaksi = document.getElementById("textSalasanaksi").value; //T2

  var onkoKirjainta = document.getElementById("textOnkoKirjainta").value; //T3

  var kertomaLuku = document.getElementById("textKertomaLuku").value; //T4

  var luku8 = document.getElementById("textLuku8").value; //T8
  var potenssi8 = document.getElementById("textPotenssi8").value; //T8

  var num1 = document.getElementById("textNum1").value; //T9
  var num2 = document.getElementById("textNum2").value; //T9
  var num3 = document.getElementById("textNum3").value; //T9
  var num4 = document.getElementById("textNum4").value; //T9
  var num5 = document.getElementById("textNum5").value; //T9

  var salasanaMuokkaus = document.getElementById("textSalasanaMuokkaus").value; //T10

  var pNum = parseInt(document.getElementById("textPnum").value); //T11
  var sNum = parseInt(document.getElementById("textSnum").value); //T11
//---------
// Tehtävä 1
var pariLuvut = "";

  for (var i = 2; i <= pariLuku; i = i+2) {
    pariLuvut+=i;
    pariLuvut+=", ";
    document.getElementById("vastaus1").innerHTML = pariLuvut;
  }
//---------
// Tehtävä 2
var salasana = "";
for (var i = 0; i < salasanaksi.length; i++) {
  salasana += salasanaksi[i] + "Ö";
}
document.getElementById("vastaus2").innerHTML = salasana;
//---------
// Tehtävä 3
if (onkoKirjainta.indexOf("ö") >= 1) {
  //vastaus3 = "Sana sisältää ö-kirjaimen.";
  document.getElementById("vastaus3").innerHTML = "ö-kirjain löytyi."
}
else {
  document.getElementById("vastaus3").innerHTML = "ö-kirjainta ei löytynyt."
}
//---------
// Tehtävä 4
if (kertomaLuku === 0 || kertomaLuku === 1) {
  document.getElementById("vastaus4").innerHTML = 1
}
for (var i = kertomaLuku - 1; i >= 1; i--) {
  kertomaLuku *=i
}
  document.getElementById("vastaus4").innerHTML = "Lukusi kertomaluku on " + kertomaLuku;
//---------
// Tehtävä 5
var vastaus5 = "";
for (var i = 1; i <= 100; i++) {
  if (i%3 == 0 && i%5 == 0) {
    vastaus5 += "HipHeijaa ";
  }
  else if (i%3 == 0) {
    vastaus5 += "Hip ";
  }
  else if (i%5 == 0) {
    vastaus5 += "Heijaa ";
  }
  else {
    vastaus5 += i + " ";
  }
  document.getElementById("vastaus5_1").innerHTML = "Muutin kaikki 3 jaolliset luvut sanaksi Hip ja 5 jaolliset sanaksi Heijaa. Molemmilla jaolliset muutin HipHeijaa:ksi.";
  document.getElementById("vastaus5_2").innerHTML = vastaus5;
}
//---------
// Tehtävä 6
var vastaus6 = "";
for (var i = 1; i <=10; i++) {
  vastaus6 += i + " ";
}
document.getElementById("vastaus6").innerHTML = vastaus6;
//---------
// Tehtävä 7
var vastaus7 = 0;
for (var i = 1; i <=10; i++) {
  vastaus7 += i;
}
document.getElementById("vastaus7").innerHTML = "Ensimmäiset 10 lukua ovat yhteensä: " + vastaus7;
//---------
// Tehtävä 8
var vastaus8 = 0;
vastaus8 = Math.pow(luku8, potenssi8);
document.getElementById("vastaus8").innerHTML = "Antamiesi lukujen vastaus on: " + vastaus8;
//---------
// Tehtävä 9

var luvut = [num1, num2, num3, num4, num5];

// Vanha (Ei toimiva koodi)
/*
var min = luvut[0];
var max = luvut[0];

for (var i = 1; i < luvut.length; i++) {
  if (luvut[i] > max) {
    max = luvut[i];
  }
  else if (luvut[i] < min) {
    min = luvut[i];
  }
}
*/
// Vanha koodi loppuu

// Uusi koodi (toimii)
var min = Math.min.apply(Math,luvut);
var max = Math.max.apply(Math,luvut);
console.log(min + " " + max);
// Uusi koodi loppuu

document.getElementById("vastaus9").innerHTML = "Pienin luku on: " + min + ", ja suurin luku: " + max;
//---------
// Tehtävä 10
var sanaKirjain, salaKirjain;
var kirjaimet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"];
var loppuSalasana = "";
var salasana = [];

for (var i = 0; i < salasanaMuokkaus.length; i++) {
  sanaKirjain = salasanaMuokkaus[i];
  salasana.push(sanaKirjain);
  var randomKirjain = Math.floor(Math.random() * kirjaimet.length);
  salaKirjain = kirjaimet[randomKirjain];
  salasana.push(salaKirjain);
}
loppuSalasana = salasana.join("");
var vastaus10 = loppuSalasana;
document.getElementById("vastaus10").innerHTML = vastaus10;

//Omaa yritystä tuossa alla, ennen kuin katsoin hieman apua sinulta

//---------
//var randomKirjain = Math.floor(Math.random() * kirjaimet.length);

/*for (var i = 0; i < salasanaMuokkaus.length; i++) {
  salasana2 += salasanaMuokkaus[i] + Math.floor(Math.random() * kirjaimet.length);
}
var vastaus10 = salasana2;
document.getElementById("vastaus10").innerHTML = salasana2;*/
//---------

//---------
// Tehtävä 11
var vastaus11 = "", parilliset = "", parittomat = "", epLuku, pLuku, pariSum = 0, ePariSum = 0;
//pLuku = Parillinen
//epLuku = Ei parillinen

//Parilliset
if (pNum%2 == 0) {
  pLuku = pNum;
}
else {
  pLuku = pNum + 1;
}
for (var a = pLuku; a <= sNum; a += 2) {
  parilliset += a + ", ";
  pariSum += a;
}

//Parittomat
if (pNum % 2 == 0) {
  epLuku = pNum + 1;
}
else {
  epLuku = pNum;
}
for (var b = epLuku; b <= sNum; b += 2) {
  parittomat += b + ", ";
  ePariSum += b;
}
console.log(parilliset + " / " + pariSum);
console.log(parittomat + " / " + ePariSum);
document.getElementById('vastaus11_1').innerHTML = "Parittomat luvut ovat: " + parittomat + " niiden summa on: " + ePariSum;
document.getElementById('vastaus11_2').innerHTML = "Parilliset luvut ovat: " + parilliset + " niiden summa on: " + pariSum;




//
}
