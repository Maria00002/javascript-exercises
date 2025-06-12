const reverseString = function(string) {
    let reversedArr = [];
    let arr = string.split("");
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
        console.log(reversedArr); 
    }
    let returnedString = reversedArr.join("");
    return returnedString;

};

// Do not edit below this line
module.exports = reverseString;
