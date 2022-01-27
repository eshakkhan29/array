var friendAge = [23, 34, 343, 43, 43, 43];
friendAge = friendAge.length;
console.log(friendAge);

var friendAge = [23, 34, 343, 43, 43, 43];
friendAge.length = 3;
console.log(friendAge);

var friendAge = [23, 34, 343, 43, 43, 43];
friendAge = friendAge.indexOf(343);
console.log(friendAge);

var friendName = [ "eshak", "khan", "hjhj", "lol",];
friendName [2] = "masud";
friendName [3] = "zubayer";
console.log(friendName)

var friendName = [ "eshak", "khan", "hjhj", "lol",];
friendName [2] = "masud";
friendName [3] = "zubayer";
friendName.push("ibn")
friendName.push("shihab")
console.log(friendName)

var friendName = [ "eshak", "khan", "name", "dichi",];
friendName.pop()
console.log(friendName)

var friendName = [ "eshak", "khan", "name", "dichi",];
var alada = friendName.pop()
console.log(alada)

var friendName = [ "eshak", "khan", "name", "dichi",];
friendName.shift()
console.log(friendName)


var takaAche = 30;
var khabrerDam = 37;

if (khabrerDam < takaAche) {
    console.log("khaite parbo");
}
else{
    console.log("khaite parbo na")
}

var takaAche = 30;
var khabrerDam = 20;

if (takaAche > khabrerDam) {
    console.log("khaite parbo");
}
else{
    console.log("khaite paarbo na")
}

var takaAche = 30;
var khabrerDam = 30;

if (takaAche == khabrerDam) {
    console.log("khabar khaite parbo")
}

console.log(5 == 4);

var takaAche = 40;
var biriyani = 120;
var morogPlaw = 110;
var tehari = 90;
var berger = 50;

if (biriyani < takaAche) {
    console.log("tahole biriyani khamu")
}
else if ( morogPlaw < takaAche) {
    console.log("morog polaw khamu")
}
else if ( tehari < takaAche) {
    console.log("tehari khamu")
}
else if ( berger < takaAche) {
    console.log("berger khamu")
}
else{
    console.log("ja gorib barite ja")
}

var aplasPaicho = true;
var bariAche = true;
if (aplasPaicho && bariAche) {
    console.log("Tahole biya korano jabe")
}
else{
    console.log("tahole biya kora lagbo na sala")
}

var aplashPaicho = false;
var poraSehh = true;
if (aplashPaicho || poraSehh) {
    console.log("cakri tomake dibo")
}

var bari = false;
var gari = true;
var bebsa = true;
var education = true;
var somman = true;

if (((bari && gari) || (bebsa && education)) || somman) {
    console.log("tahole meye biya deoya jay")
}

