"use strict";
//Written by :TAYYABA RAO
//Date :18/feb/2024
//Roll No: 00388416
class Shirt {
    constructor(size = "larger", message = "I love typescript") {
        this.size = size;
        this.message = message;
    }
}
function make_shirt(size = "medium", message = "I love typescript") {
    return new Shirt(size, message);
}
//larger shirt
const largerShirt = make_shirt();
console.log("Larger Shirt:", largerShirt);
//medium shirt
const mediumShirt = make_shirt();
console.log("Medium Shirt:", mediumShirt);
//custom shirt
const constomShirt = make_shirt();
console.log("Constom Shirt:", constomShirt);
