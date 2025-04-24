const repeatString = function(string, num) {
    let returnedString = "";
    if (num < 0) {
        return "ERROR";
    } else {

        for (let i = 0; i < num; i++){
            returnedString += string;
        }
        return returnedString;
    }

};

// console.log(repeatString("hey",3));

// Do not edit below this line
module.exports = repeatString;
