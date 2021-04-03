function javaScript() {
//---------
//Yleiset muuttujat
  var pariLuku = parseInt(document.getElementById("textPariLuku").value); //T1
  var salasanaksi = document.getElementById("textSalasanaksi").value; //T2
  var onkoKirjainta = document.getElementById("textOnkoKirjainta").value;
  var kertomaLuku = document.getElementById("textKertomaLuku").value;


  /*var viikko = document.getElementById("textviikko").value; //T2

  var vuosi = document.getElementById("textvuosi").value; //T3

  var num1 = document.getElementById("textnum1").value;//T4
  var num2 = document.getElementById("textnum2").value; //T4
  var num3 = document.getElementById("textnum3").value; //T4
  var num4 = document.getElementById("textnum4").value; //T4
  var num5 = document.getElementById("textnum5").value; //T4

  var muuttuja = document.getElementById("textmuuttuja").value; */ //T5
//---------
// Tehtävä 1
var pariLuvut = "";
  for (var i = 2; i <= pariLuku; i = i+2) {
    pariLuvut+=i;
    pariLuvut+=", ";
  }
document.getElementById("vastaus1").innerHTML = pariLuvut;
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
var kertoma = 



//
}
