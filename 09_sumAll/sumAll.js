const sumAll = function(firstNum, lastNum) {
    let newArr = [];
    if (firstNum > lastNum) {
        let num = firstNum;
        firstNum = lastNum;
        lastNum = num;
    }
    if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
        return "ERROR";
    }
    if ((firstNum < 0 || lastNum < 0)){
        return "ERROR";
    }
    for (let i = firstNum; i <= lastNum; i++) {
        newArr.push(i);
    }
    return newArr.reduce((total, currentValue)=>total+currentValue, 0);
};

// Do not edit below this line
module.exports = sumAll;
