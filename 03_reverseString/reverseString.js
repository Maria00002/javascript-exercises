const reverseString = function(string) {
    let reversed = "";
    for (let num = string.length -1; num >= 0 ; num--) {
        reversed += string.charAt(num);
    }
    return reversed;
};

// console.log(reverseString("Hello there"));
// Do not edit below this line
module.exports = reverseString;
