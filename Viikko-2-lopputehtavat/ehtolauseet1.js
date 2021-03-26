var t;
//Tehtävä 1
t = "Tehtävä 1: ";
function jarjesta(num1,num2,num3) {
  var taulukko = [num1,num2,num3];
  console.log(t + taulukko.sort());
}
jarjesta(3,7,1);

//Tehtävä 2
t = "Tehtävä 2: ";
function etsiSuurin(num1,num2,num3,num4,num5) {
  var taulukko = [num1,num2,num3,num4,num5];
  console.log(t + Math.max.apply(0,taulukko));
}
etsiSuurin(2,5,4,8,3);

//Tehtävä 3
t = "Tehtävä 3: ";
function pariPariton(num) {
  if (num % 2 == 0) {
    console.log(t + "parillinen");
  }
  else {
    console.log(t + "pariton");
  }
}
pariPariton(4);

//Tehtävä 4
t = "Tehtävä 4: "
function tarpeeksiVanha(ika) {
  if (ika < 16) {
    console.log(t + "Saat ajaa polkupyörää!");
  }
  else if (ika < 18) {
    console.log(t + "Saat ajaa pyörän lisäksi mopoa!");
  }
  else {
    console.log(t + "Saat ajaa pyörän ja mopon lisäksi autoa!");
  }
}
tarpeeksiVanha(16);

//Tehtävä 5
t = "Tehtävä 5: "
function kaannaKieleen(kieli) {
  if (kieli == "Englanti") {
    console.log(t + "Hello World!");
  }
  else if (kieli == "Ruotsi") {
    console.log(t + "Hej världen!");
  }
  else if (kieli == "Espanja") {
    console.log(t + "Hola Mundo!");
  }
  else {
    console.log(t + "Et valinnut kieltä.");
  }
}
kaannaKieleen("Englanti");
