const removeFromArray = function(arr, ...args) {
    for (const arg of args) {
        let contain = arr.includes(arg);
        while (contain) {
            let index = arr.indexOf(arg);
            arr.splice(index,1);
            contain = arr.includes(arg);
        }
    }    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
