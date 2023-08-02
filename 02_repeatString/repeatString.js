const repeatString = function(string, num) {
    returnString = "";
    for (let i = 0; i < num; i++) {
        returnString += string;
    }
    if (num < 0) {
        returnString = 'ERROR';
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
