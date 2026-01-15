// Declare a global variable
let genderType = "female"
function scopingAssign(){
    // Declare a function-scoped variable(let) colour
    let colour = "brown"
    if(genderType){
        // declare a block scoped variable(var) age and colour
        var age = 30
        let colour="pink"
         // print the block scoped variable (let) colour
        console.log("Colour is " +colour);
    }
    // print the block scoped variable age using var
   console.log("Age is " +age);
}
scopingAssign()
//print the gloabl declared variable.
console.log("GenderType is " +genderType);