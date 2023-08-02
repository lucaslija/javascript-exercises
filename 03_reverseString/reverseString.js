const reverseString = function(string) {
    const chars = string.split('');
    let reversed = [];
    for (let i = chars.length; i >= 0; i--) {
        reversed.push(chars[i]);
    }
    const newString = reversed.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
