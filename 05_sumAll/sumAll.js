const sumAll = function(startNum, endNum) {
    let sum = 0;
    if (Number.isInteger(startNum) && Number.isInteger(endNum)) {
        if (startNum > endNum) {
            let num = startNum;
            startNum = endNum;
            endNum = num;
            sum = calculateSum (startNum, endNum);
        }
        else if (startNum <= endNum) {
            if (startNum < 0 || endNum < 0) {
                return "ERROR";
            }
            else {
                sum = calculateSum (startNum, endNum);
            }
        }
        
        return sum;    
    } else {
        return "ERROR";
    }
  
};

function calculateSum (startNum, endNum) {
    let sum = 0;
    for (let i = startNum; i <= endNum; i++) {
        sum += i;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
