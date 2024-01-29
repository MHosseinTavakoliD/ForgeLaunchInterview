/**
 * Write a function that will tell me if a phrase, word, or input
 * (provided as a string) is a palindrome.
 */

function isPalindrome (input){
    // Convert input to string
    const inputSTR = input.toString();
    // split, reverse, and rejoin: compaer with its reverse
    var reversed = inputSTR.split('').reverse().join('');
    console.log(reversed);
    return inputSTR == reversed

}
// Example usage:
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false