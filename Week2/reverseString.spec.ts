import {test} from "@playwright/test";
import { reverse } from "node:dns";

/* function reversestring() {
    let rev = "playwright"
    let reverse= ""
    for (let i=rev.length - 1; i>=0; i--){
        reverse = reverse + rev.charAt(i);
    }
 console.log(reverse);
}
reversestring() */
//Reverse a string using reverse()
function reverseString() {
let string = "training java"
let rev = string.split("").reverse().join("")
console.log(rev)
}
reverseString()