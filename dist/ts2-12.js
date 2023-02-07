"use strict";
//1.Union Types whith variable
let value;
value = 120;
value = "Mark";
console.log(value);
//2.Union Type with function
function display(data) {
    console.log(data);
}
display(123);
display("Mark");
//2.Union Type wit array
let arrType;
let z;
arrType = [10, 20, 30];
for (z = 0; z < arrType.length; z++) {
    console.log(arrType[z]);
}
arrType = ["Thai", "Lao", "Malaysia"];
for (z = 0; z < arrType.length; z++) {
    console.log(arrType[z]);
}
