const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    } else {
        let newString = "";
        for (let i = 0; i < num; i++) {
            newString = newString.concat(string);
        }
        return newString;
    }
    
};


// Do not edit below this line
module.exports = repeatString;
