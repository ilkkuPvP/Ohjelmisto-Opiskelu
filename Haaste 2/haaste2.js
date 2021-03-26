var taulukkoMuuttuja = [34, 566, 71, 89]; //Tehtävä 3 taulukko

//Tehtävä 1
function laskeYhteen(teht, num1, num2) {
  console.log(teht + (num1 + num2));
}

// Tehtävä 2
function ekaMuuttuja(teht, muuttuja) {
  console.log(teht + (muuttuja));
}

// Tehtävä 3 (Yllätyin, että osasin :D Tälle en edes katsonut apua)
function kaksiMuuttujaa(num1, num2) {
  if ((num1 + num2) < 100) {
    console.log("Tehtävä 3: " + "Lukujen summa on alle 100");
  }
  else {
    console.log("Tehtävä 3: " + "Luvut ovat liian suuria, jotta pystyisin laskemaan niitä!");
  }
}

//Tehtävä 4 (Tämäkin oli todella helppo)
function onkoSamat(num1, num2) {
  if (num1 == num2) {
    console.log("Tehtävä 4: " + "Samat luvut");
  }
  else {
    console.log("Tehtävä 4: " + "Eri luvut");
  }
}

//Tehtävä 5 (Tääkin oli helppo)
function sekunneiksi(tunnit, minuutit, sekunnit) {
  console.log("Tehtävä 5:");
  console.log("   Tunnit sekunneiksi: " + (tunnit * 60 * 60));
  console.log("   Minuutit sekunneiksi: " + (minuutit * 60));
  console.log("   Sekunnit sekunneiksi: " + sekunnit);
}

//Tehtävä 6 (Tässä tarvitsin apua jonkun verran, mutta lopulta tajusin)
function laskeIkani(pv, kk, vvvv) {

  function muutaVuodet(vvvv) {
    return vvvv * 365.25;
  }

  function muutaKuukaudet(kk) {
    switch (kk - 1) {
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
  Syntymaaika = muutaVuodet(vvvv) + muutaKuukaudet(kk) + pv;
  Nyt = muutaVuodet(2021) + muutaKuukaudet(3) + 5;
  console.log("Tehtävä 6: " + "Minun ikäni päivinä on " + (Nyt - Syntymaaika));
}
