const getTheTitles = function(books) {
    let arr = [];
    for (key in books) {
        arr.push(books[key]["title"]);
    }
    return arr;
};

// getTheTitles(books);

// Do not edit below this line
module.exports = getTheTitles;
