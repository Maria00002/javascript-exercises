const findTheOldest = function(people) {
    // console.log();
    let compare = [];
    for (let key in people) {
        if (people[key]["yearOfDeath"] === undefined) {
            people[key]["yearOfDeath"] = new Date().getFullYear();
        } 
        compare.push(people[key]["yearOfDeath"] - people[key]["yearOfBirth"]);
    }
    let oldest = compare[0];
    let index = 0;
    for (let i = 0; i < compare.length; i++) {
        if (oldest < compare[i]) {
            oldest = compare[i];
            index = i;
        }
    }
    console.log(people[index]); //
    return people[index];
    
    

};


// findTheOldest(people);


// Do not edit below this line
module.exports = findTheOldest;
