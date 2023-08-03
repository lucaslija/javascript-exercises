const sumAll = function(a, b) {
    if (!(Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0)) {
        return "ERROR";
    }
    const lo = Math.min(a, b);
    const hi = Math.max(a, b);

    let sumUp = function(n) {
        return ((n * (n + 1)) / 2)
    }

    return sumUp(hi) - sumUp(lo - 1);
};

// Do not edit below this line
module.exports = sumAll;
