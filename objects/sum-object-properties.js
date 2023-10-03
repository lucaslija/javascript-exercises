let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let empty = {};

function sumSalaries(obj) {
    let sum = 0;
    for (let salary in obj) {
        sum += obj[salary];
    }
    return sum;
}

console.log(sumSalaries(salaries));
console.log(sumSalaries(empty));
