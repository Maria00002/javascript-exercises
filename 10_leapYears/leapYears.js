// const leapYears = function(year) {
//     // Leap years are years divisible by four, but not devisible by 100
//     // unless they are divisible by 400 
//     if (year % 4 == 0 && year % 400 == 0) {
//         return true;
//     } else if (year % 4 == 0 && year % 100 ==0) {
//         return false;
//     }  else if (year % 4 == 0) {
//         return true;
//     } else {
//         return false;
//     }

// };

// Online answer
const leapYears = function (year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleBYFourHundred = year % 400 === 0;

    if (
        isYearDivisibleByFour && 
        (!isCentury || isYearDivisibleBYFourHundred) 
    ) {
        return true;
    } else {
        return false;
    }
}


// Do not edit below this line
module.exports = leapYears;
