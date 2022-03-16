const bottol = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
}
/*
for (let i = 0; i > 10; i++) { }
for (const num of numbers) { } // array
for (const prop in bottol) { } // object
 */

for (const prop in bottol) {
    // console.log(prop, bottol[prop]);
}

const keys = Object.keys(bottol)

for (const prop in bottol) {
    // console.log(prop, bottol[prop]);

}
// advanced
const entries = Object.entries(bottol)
console.log(entries);
const [key, value] = ['color', 'yellow']
for (const [key, value] of Object.entries(bottol)) {
    console.log(key, value);
}