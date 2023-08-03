const removeFromArray = function(array, ...elements) {
    let ret = [];
    for (each of array) {
        if (!(elements.includes(each))) {
            ret.push(each);
        }
    }
    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
