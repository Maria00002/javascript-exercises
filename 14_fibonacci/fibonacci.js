const fibonacci = function(number) {
    let index = Number(number);
    let result = 0;
    let firstNum = 1;
    let secondNum = 1;
    let nextTerm;
    if (index < 0) {
        return ("OOPS");
    } else {
        if (index == 0) {
            return 0;
        } else if (index == 1 || index == 2) {
            return result = 1;
        } else {
            for (let i = 3; i <= index; i++) {
                nextTerm = firstNum + secondNum;
                firstNum = secondNum;
                secondNum = nextTerm;      
            }
            return nextTerm;
        }
    }
};


// fibonacci(1);
// fibonacci(2);
// fibonacci(3);
// fibonacci(4);
// fibonacci(5);
// fibonacci(6);
// fibonacci(7);
// fibonacci(8);
// fibonacci(9);
// fibonacci(10);
// fibonacci(11);
// fibonacci(12);


// Do not edit below this line
module.exports = fibonacci;
