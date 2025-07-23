const palindromes = function (str) {
    let arr = str.toLowerCase().split(""); //arr is now lowercased str
    let newArr = [];
    let reverse = [];
    for (let char of arr) {
        if (isChar(char) || Number.isInteger(Number(char))) {
            newArr.push(char);
        }
    }

    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === " ") {
            newArr.splice(i,1);
        }
    }

    let newStr = newArr.join("");
    console.log(newStr); //
    reverse = newArr.reverse();
    let reverseStr = reverse.join("");
    console.log(reverseStr); //
    console.log(newStr.includes(reverseStr)); // 
    return newStr.includes(reverseStr);
};

function isChar(str) {
    return str.match(/[a-z]/i);
}

// palindromes("ZZZZ car, a man, a maracaz");

// Do not edit below this line
module.exports = palindromes;
