// function agaMora(man) {
//     console.log("amar man hocche", man)
//     return man;
// }

// agaMora(10)

// function singgara(taka){
//     var ektarDam = 5;
//     var singgaraPamu = taka / ektarDam;
//     return singgaraPamu;
// }

// var takaDimu = 500;
// var takaDichi = singgara(takaDimu)
// console.log(takaDichi);

// function biyogKoro(man1, man2) {
//     console.log(man1, man2);
//     var biyigFool = man1 - man2;
//     return biyigFool;
// }
// var prothomMan = 50;
// var ditiyoMan = 20;
// var fol = biyogKoro(prothomMan, ditiyoMan);
// console.log(fol);

// var smartphone = { brand: "iPhone", model: "13" };
// console.log(smartphone["brand"]);

// function getReminder(number1, number2) {
//     number1 % number2;
//   }
  
//   const reminder = getReminder(12, 2);
  
//   console.log(reminder);
// function addNumber(number1, number2) {
//     return "Result is " + number1 + number2;
//    }
   
//    var result = addNumber(5, 4);
//    console.log(result);

// প্রাকটিস চ্যালেঞ্জ -১:  

// ক্লাস সেভের এর ফাইনাল এক্সাম এ তুমি ফার্স্ট হয়েছো। তোমার বন্ধু আলিয়া, ডালিয়া, সালিয়া, মালিয়া, লিলিয়া আর জ্বালাইয়া - তাদের grade তুমি জানো না। তবে তাদের নম্বর জানো. আলিয়া 95 পেয়েছে, ডালিয়া 66 পেয়েছে, সালিয়া 80 পেয়েছে, মালিয়া পেয়েছে 59, লিলিয়া পেয়েছে 47, জ্বালাইয়া পেয়েছে 77। তুমি JS code দিয়ে তাদের grade বের করে দিতে পারবে?

// ১) যারা ৫০ এর নিচে পেয়েছে, তাদের grade F.

// ২) যারা ৫০ বা তার উপরে পেয়েছে, অথবা ৬০ এর নিচে পেয়েছে, তাদের grade D.

// ৩) যারা ৬০ বা তার উপরে পেয়েছে, অথবা ৭০ এর নিচে পেয়েছে, তাদের grade C.

// ৪) যারা ৭০ বা তার উপরে পেয়েছে, অথবা ৮০ এর নিচে পেয়েছে, তাদের grade B.

// ৫) যারা ৮০ বা তার উপরে পেয়েছে, অথবা ৯০ এর নিচে পেয়েছে, তাদের grade A.

// ৬) যারা ৯০ বা তার উপরে পেয়েছে, তাদের grade A+.


var mark = 60;


if (89 < mark) {
    console.log("A+");
}
else if (79 < mark) {
    console.log("A")
}
else if (69 < mark) {
    console.log("B")
}
else if (59 < mark) {
    console.log("C")
}
else if (49 < mark) {
    console.log("D")
}
else {
    console.log("F")
}