"use strict";
//Tuple Types
let arrTuple = [101, "Mark", 50, "CEO of Facebook"];
console.log(arrTuple);
let x;
let arrTuple2 = [];
arrTuple2[0] = 102;
arrTuple2[1] = "Elon";
arrTuple2[3] = 52;
arrTuple2[4] = "CEO of TESLA";
// for(x in arrTuple2){
//     console.log(arrTuple2[x])
// }
function displayTuple(arrTu_value) {
    for (x in arrTuple2) {
        console.log(arrTuple2[x]);
    }
}
displayTuple(arrTuple2);
