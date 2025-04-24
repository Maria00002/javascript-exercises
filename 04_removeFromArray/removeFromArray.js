const removeFromArray = function(arr, ...args) {
    console.log("Array is: " + arr);
    console.log("Args are: " + args);
    for (const arg of args) {
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] === arg) {
                arr.splice(i,1);
                i--;
            }
        }
    }
    return arr;
};

let output = removeFromArray([1,2,3,3,4,5],3,5);
console.log(output);
// Do not edit below this line
module.exports = removeFromArray;
