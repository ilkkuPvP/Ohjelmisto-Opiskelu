//Tehtävä 1
var t1 = "Tehtävä 1: ";
function laskeYhteen(num1, num2) {
  console.log(t1 + (num1 + num2));
}
laskeYhteen(2, 5);
// Tehtävä 2
var t2 = "Tehtävä 2: ";
function ekaMuuttuja(num1, num2, num3, num4) {
  var taulukko = [78, 82, 129, 367];
  console.log(t2 + taulukko[0]);
}
ekaMuuttuja();
// Tehtävä 3 (Yllätyin, että osasin :D Tälle en edes katsonut apua)
var t3 = "Tehtävä 3: ";
var taulukkoMuuttuja = [34, 566, 71, 89];
function kaksiMuuttujaa(num1, num2) {
  if ((num1 + num2) < 100) {
    console.log(t3 + "Lukujen summa on alle 100");
  }
  else if ((num1 + num2) == 100) {
    console.log(t3 + "Luku on sata, tätä korkeammalle en voi laskea.");
  }
  else {
    console.log(t3 + "Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
  }
}
kaksiMuuttujaa(26, 49);
//Tehtävä 4 (Tämäkin oli todella helppo)
var t4 = "Tehtävä 4: ";
function onkoSamat(num1, num2) {
  if (num1 == num2) {
    console.log(t4 + "Samat luvut");
  }
  else {
    console.log(t4 + "Eri luvut");
  }
}
onkoSamat(3, 3);
//Tehtävä 5 (Tääkin oli helppo)
var t5 = "Tehtävä 5: ";
function sekunneiksi(tunnit, minuutit, sekunnit) {
  console.log(t5);
  console.log("   Tunnit sekunneiksi: " + (tunnit * 60 * 60));
  console.log("   Minuutit sekunneiksi: " + (minuutit * 60));
  console.log("   Sekunnit sekunneiksi: " + sekunnit);
}
sekunneiksi(12, 48, 43);
//Tehtävä 6 (Tässä tarvitsin apua jonkun verran, mutta lopulta tajusin)
var t6 = "Tehtävä 6: ";
function laskeIkani(spv, skk, svvvv) {

  function muutaVuodet(svvvv) {
    return svvvv * 365.25;
  }

  function muutaKuukaudet(skk) {
    switch (skk - 1) {
      case 0:
        return 0;
        break;

      case 1:
        return 31;
        break;

      case 2:
        return 59;
        break;

      case 3:
        return 90;
        break;

      case 4:
        return 120;
        break;

      case 5:
        return 151;
        break;

      case 6:
        return 181;
        break;

      case 7:
        return 212;
        break;

      case 8:
        return 243;
        break;

      case 9:
        return 273;
        break;

      case 10:
        return 304;
        break;

      case 11:
        return 334;
        break;

      default:
        return 0;
    }
  }
  var syntymaaika = muutaVuodet(svvvv) + muutaKuukaudet(skk) + spv;
  var nykypaiva = muutaVuodet(2021) + muutaKuukaudet(3) + 5;
  console.log(t6 + "Minun ikäni päivinä on " + (nykypaiva - syntymaaika));
}
laskeIkani(3, 9, 2004);
