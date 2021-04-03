//Tehtävä 1
var t1 = "Tehtävä 1: "
function armstrongLuvut() {
  for(var luvunSuuruus = 100; luvunSuuruus < 1000; luvunSuuruus++) {
    var luku = luvunSuuruus.toString().split("");
    if(Math.pow(luku[0],3) + Math.pow(luku[1],3) + Math.pow(luku[2],3) == luvunSuuruus) {
      console.log(t1 + luvunSuuruus);
    }
  }
}
armstrongLuvut();

//Tehtävä 2
var t2 = "Tehtävä 2: ";
function kuvionPiirto() {
  var x, y, kirjain;
  for (x = 1; x <= 6; x++) {
    for (y = 1; y < x; y++) {
      kirjain = kirjain + ("*");
    }
    console.log(t2 + kirjain);
    kirjain = "";
  }
  //console.log("*");
  //console.log("**");
  //console.log("***");
  //console.log("****");
  //console.log("*****");
}
kuvionPiirto();

//Tehtävä 3
var t3 = "Tehtävä 3: "
function koodikieleksi(sana) {
  var kirjaimet = Array.from(sana);
  for (var a = 0; a < sana.length; a++) {
    switch (kirjaimet[a]) {
      case "a":
        kirjaimet[a] = 4;
        break;

      case "e":
        kirjaimet[a] = 3;
        break;

      case "i":
        kirjaimet[a] = 1;
        break;

      case "o":
        kirjaimet[a] = 0;
        break;

      case "s":
        kirjaimet[a] = 5;
        break;
    }
  }
  var lopullinenTeksti = kirjaimet.toString(),replace(/,/g,'');
  console.log(t3 + lopullinenTeksti);
}
koodikieleksi("hei, mitä kuuluu");
