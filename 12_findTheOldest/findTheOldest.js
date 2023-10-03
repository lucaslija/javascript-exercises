const findTheOldest = function(people) {
    const d = new Date();
    let year = d.getFullYear();

    let stillAlive = people.map(person => ({
        name: person.name,
        yearOfBirth: person.yearOfBirth,
        yearOfDeath: (person.yearOfDeath ? person.yearOfDeath : year),
    }));

    const ordered = stillAlive.sort((b, a) =>
    (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
