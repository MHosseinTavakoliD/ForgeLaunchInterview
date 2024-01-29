/*
A pandigital number contains all digits (0-9) at least once.
Write a function that takes an integer, returning true if the
integer is pandigital, and false otherwise.
 */

function isPandigital(input){
    // Convert the number to a string
    var numStr = input.toString();
    // let numList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    // check each digit
    for (var i = 0; i <=9; i++){
        // check each digit with numStr if no assimilates, -1 will return
        if (numStr.indexOf(i.toString()) === -1){
            return false
       }    }    return true;}

// Example usage
console.log(isPandigital(1234567890)); // true
console.log(isPandigital(9387561324)); // false
console.log(isPandigital(9123434562378059)); // false