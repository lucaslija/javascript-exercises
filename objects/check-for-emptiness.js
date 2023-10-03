function isEmpty (obj) {
    let propList = [];
    for (let prop in obj) {
        propList.push(prop);
    }
    if (propList.length === 0) {
        return true;
    } else {
        return false;
    }
}

function betterIsEmpty (obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

let emptyObj = {};
let notEmptyObj = {
    key: "value",
}


console.log(isEmpty(emptyObj));
console.log(betterIsEmpty(emptyObj));
console.log(isEmpty(notEmptyObj));
console.log(betterIsEmpty(notEmptyObj));
