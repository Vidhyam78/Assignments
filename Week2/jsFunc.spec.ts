/* //Function Declaration
function userProfile(name){
    console.log(`Hello ${name}!`)
}
userProfile("Sreevidhya")

//Arrow Function (double the input)

let double = (number1) => (2*number1) 
console.log(double(10)); */

//Anonymous Function
let anonyFunc = function(){
    setTimeout(function(){console.log("This message is delayed by 2 seconds")}, 2000);
    }
    anonyFunc();