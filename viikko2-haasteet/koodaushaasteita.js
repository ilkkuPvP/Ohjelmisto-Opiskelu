//Tehtävä 1
var t1 = "Tehtävä 1: ";
function pieninSuurin(nums) {
  nums.sort();
  var pienin = nums.shift();
  var suurin = nums.pop();
  console.log(t1 + "Pienin on " + pienin + " ja suurin on " + suurin);
}

pieninSuurin([8,4,9,6,2]);

//Tehtävä 2
var t2 = "Tehtävä 2: ";
function pariPariton(luku) {
  if (luku % 2 == 0) {
    console.log(t2 + "parillinen");
  }
  else {
    console.log(t2 + "pariton");
  }
}
pariPariton(4);

//Tehtävä 3
var t3 = "Tehtävä 3: ";
function palautaKK(kk) {

  switch (kk) {
    case 1:
      console.log(t3 + "Tammikuu");
      break;

    case 2:
      console.log(t3 + "Helmikuu");
      break;

    case 3:
      console.log(t3 + "Maaliskuu");
      break;

    case 4:
      console.log(t3 + "huhtikuu");
      break;

    case 5:
      console.log(t3 + "toukokuu");
      break;

    case 6:
      console.log(t3 + "Kesäkuu");
      break;

    case 7:
      console.log(t3 + "Heinäkuu");
      break;

    case 8:
      console.log(t3 + "Elokuu");
      break;

    case 9:
      console.log(t3 + "Syyskuu");
      break;

    case 10:
      console.log(t3 + "Lokakuu");
      break;

    case 11:
      console.log(t3 + "Marraskuu");
      break;

    case 12:
      console.log(t3 + "Joulukuu");
      break;
    default:
      console.log(t3 + "Arvon täytyy olla 1-12");
  }
}
palautaKK(1);

//Tehtävä 4
var t4 = "Tehtävä 4: ";
function tiedot(enimi, snimi, puh) {
  this.etunimi = enimi,
  this.sukunimi = snimi,
  this.puhelinnumero = puh
}
var Pekka = new tiedot("Pekka", "Puukasa", "123456789");
console.log(t4 + Pekka.sukunimi);

//Tehtävä 5
var t5 = "Tehtävä 5: ";
function aakkosiksi(sana) {
  var taulukko = Array.from(sana);
  taulukko = taulukko.sort();
  var muutettuSana = taulukko.join("");
  console.log(t5 + muutettuSana);
}
aakkosiksi("terve");

//Tehtävä 6
var t6 = "Tehtävä 6: "
function arvostele(pisteet) {
  if (pisteet < 50) {
    console.log(t6 + "Hylätty");
  }
  else if (pisteet < 60) {
    console.log(t6 + "T1");
  }
  else if (pisteet < 70) {
    console.log(t6 + "T2");
  }
  else if (pisteet < 80) {
    console.log(t6 + "H3");
  }
  else if (pisteet < 90) {
    console.log(t6 + "H4");
  }
  else if (pisteet < 100) {
    console.log(t6 + "K5");
  }
}
arvostele(77);
