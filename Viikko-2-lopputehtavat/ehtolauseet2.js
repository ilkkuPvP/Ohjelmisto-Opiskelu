function javaScript() {
//---------
//Yleiset muuttujat
  var luku = document.getElementById("textluku").value; //T1

  var viikko = document.getElementById("textviikko").value; //T2

  var vuosi = document.getElementById("textvuosi").value; //T3

  var num1 = document.getElementById("textnum1").value;//T4
  var num2 = document.getElementById("textnum2").value; //T4
  var num3 = document.getElementById("textnum3").value; //T4
  var num4 = document.getElementById("textnum4").value; //T4
  var num5 = document.getElementById("textnum5").value; //T4

  var muuttuja = document.getElementById("textmuuttuja").value; //T5
//---------
// Tehtävä 1
  if (luku < 0) {
    vastaus1 = "Antamasi luku on negatiivinen";
  }
  else if (luku > 0) {
    vastaus1 = "Antamasi luku on positiivinen";
  }
  else if (luku == 0) {
    vastaus1 = "Antamasi luku on 0, eli neutraali";
  }
  document.getElementById("vastaus1").innerHTML = vastaus1;
//---------
//Tehtävä 2
  switch (viikko) {
    case "1":
      vastaus2 = "Maanantai";
      break;

    case "2":
      vastaus2 = "Tiistai";
      break;

    case "3":
      vastaus2 = "Keskiviikko";
      break;

    case "4":
      vastaus2 = "Torstai";
      break;

    case "5":
      vastaus2 = "Perjantai";
      break;

    case "6":
      vastaus2 = "Lauantai";
      break;

    case "7":
      vastaus2 = "Sunnuntai";
      break;

    default:
      vastaus2 = "Anna joku luku (1-7)";
      break;
}
  document.getElementById("vastaus2").innerHTML = vastaus2;
//---------
//Tehtävä 3
  if (vuosi == "") {
    vastaus3 = "Anna joku vuosiluku"
  }
  else if (vuosi % 4 == 0 && vuosi % 100 != 0) {
    vastaus3 = "Vuosi on karkausvuosi";
  }
  else if (vuosi % 400 == 0) {
    vastaus3 = "Vuosi on karkausvuosi";
  }
  else {
    vastaus3 = "Vuosi ei ole karkausvuosi";
  }
  document.getElementById("vastaus3").innerHTML = vastaus3;
//---------
//Tehtävä 4
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  num3 = parseInt(num3);
  num4 = parseInt(num4);
  num5 = parseInt(num5);
  vastaus4 = "Summa: " + (num1 + num2 + num3 + num4 + num5) + " ja keskiarvo: " + (num1 + num2 + num3 + num4 + num5) / 5;

  document.getElementById("vastaus4").innerHTML = vastaus4;
//---------
//Tehtävä 5
  muuttuja = parseInt(muuttuja);
  vastaus5_1 = muuttuja + "x1=" + muuttuja * 1;
  vastaus5_2 = muuttuja + "x2=" + muuttuja * 2;
  vastaus5_3 = muuttuja + "x3=" + muuttuja * 3;
  vastaus5_4 = muuttuja + "x4=" + muuttuja * 4;
  vastaus5_5 = muuttuja + "x5=" + muuttuja * 5;
  vastaus5_6 = muuttuja + "x6=" + muuttuja * 6;
  vastaus5_7 = muuttuja + "x7=" + muuttuja * 7;
  vastaus5_8 = muuttuja + "x8=" + muuttuja * 8;
  vastaus5_9 = muuttuja + "x9=" + muuttuja * 9;
  vastaus5_10 = muuttuja + "x10=" + muuttuja * 10;

  document.getElementById("vastaus5_1").innerHTML = vastaus5_1;
  document.getElementById("vastaus5_2").innerHTML = vastaus5_2;
  document.getElementById("vastaus5_3").innerHTML = vastaus5_3;
  document.getElementById("vastaus5_4").innerHTML = vastaus5_4;
  document.getElementById("vastaus5_5").innerHTML = vastaus5_5;
  document.getElementById("vastaus5_6").innerHTML = vastaus5_6;
  document.getElementById("vastaus5_7").innerHTML = vastaus5_7;
  document.getElementById("vastaus5_8").innerHTML = vastaus5_8;
  document.getElementById("vastaus5_9").innerHTML = vastaus5_9;
  document.getElementById("vastaus5_10").innerHTML = vastaus5_10;
}
