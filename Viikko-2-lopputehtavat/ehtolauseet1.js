//Tehtävä 1
function jarjesta() {
  let num1 = document.getElementById("textLukuJar1").value;
  let num2 = document.getElementById("textLukuJar2").value;
  let num3 = document.getElementById("textLukuJar3").value;

  let taulukko = [num1,num2,num3];
  document.getElementById("vastaus1").innerHTML = taulukko.sort();
}

//Tehtävä 2
function etsiSuurin() {
  let num1 = document.getElementById("textLukuEtsi1").value;
  let num2 = document.getElementById("textLukuEtsi2").value;
  let num3 = document.getElementById("textLukuEtsi3").value;
  let num4 = document.getElementById("textLukuEtsi4").value;
  let num5 = document.getElementById("textLukuEtsi5").value;

  let taulukko = [num1,num2,num3,num4,num5];
  document.getElementById("vastaus2").innerHTML = Math.max.apply(0,taulukko);
}
//Tehtävä 3
function pariPariton() {
  let num = document.getElementById("textPariPariton").value;

  if (num % 2 == 0) {
    document.getElementById("vastaus3").innerHTML = "parillinen";
  }
  else {
    document.getElementById("vastaus3").innerHTML = "pariton";
  }
}

//Tehtävä 4
function tarpeeksiVanha() {
  let ika = document.getElementById("textIka").value;

  if (ika < 16) {
    document.getElementById("vastaus4").innerHTML = "Saat ajaa polkupyörää!";
  }
  else if (ika < 18) {
    document.getElementById("vastaus4").innerHTML = "Saat ajaa pyörän lisäksi mopoa!";
  }
  else {
    document.getElementById("vastaus4").innerHTML = "Saat ajaa pyörän ja mopon lisäksi myös autoa!";
  }
}

//Tehtävä 5
function kaannaKieleen() {
  let kieli = document.getElementById("selectKieli").value;

  if (kieli == "eng") {
    document.getElementById("vastaus5").innerHTML = "Hello World!";
  }
  else if (kieli == "ruo") {
    document.getElementById("vastaus5").innerHTML = "Hej världen!";
  }
  else if (kieli == "esp") {
    document.getElementById("vastaus5").innerHTML = "Hola Mundo!";
  }
  else {
    document.getElementById("vastaus5").innerHTML = "Et valinnut kieltä.";
  }
}
