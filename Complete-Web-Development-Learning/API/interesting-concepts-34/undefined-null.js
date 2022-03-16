/*
undefined
1. variable value not assign
2. vfunction but didn't return anything
3. just wrote return but didn't return anything
4. parameter that isn't passed
5. property that dosen't exist in an object
6. accessing array element out of range
7. accessing deleted array element
8. explicitly set value to undefined
========================
null
*/
let first;
// console.log(first);
function secund(x, y) {
    const sum = x + y;
}
const result = secund(3, 91)
// console.log(result);
function add(a, b) {
    const fun = a + b
    if (b < 10) {
        return
    }
    return fun
}
const fourth = add(3, 4)
// console.log(fourth);

function dubble(a, b) {
    const result = a * 2;
    // console.log(b);
    return result
}
dubble(10, 2)

const fiveth = { name: 'sogir udding', age: 15, location: 'bandarban' };
// console.log(fiveth.phone);

const sixth = [59, 3, 45, 2];
// console.log(sixth[5]);

const seventh = [59, 3, 45, 2];
delete seventh[2]
// console.log(seventh[2]);

const eighth = undefined;
console.log(eighth);

const myObj = { name: 'samad', profession: null }