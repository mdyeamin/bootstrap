const bottol = { color: 'yellow', hold: 'water', price: 50, isCleaned: true }
//get all propartis
console.log(Object.keys(bottol));
//get all values
console.log(Object.values(bottol));

console.log(Object.entries(bottol));
//delete an onject property
// Object.seal(bottol)
Object.freeze(bottol)
delete bottol.isCleaned
bottol.price = 100
console.log(bottol);