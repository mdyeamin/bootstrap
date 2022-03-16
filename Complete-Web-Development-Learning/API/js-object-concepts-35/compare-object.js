const first = { a: 1, b: 2 };
const secund = { a: 1, b: 2 };
const third = first
if (first === third) {
    // console.log('object are equal');
} else {
    // console.log('object ere deffarent');
}
console.log(JSON.stringify(first));
console.log(JSON.stringify(secund));
const first2 = { a: 1, b: 2 };
const secund2 = { a: 1, b: 2 };

if (JSON.stringify(first2) === JSON.stringify(secund2)) {
    // console.log('object are equal');
}

function compareObject(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
    }
    for (const prop in obj1) {
        if (obj1[prop] !== obj2[prop]) {
            return false
        }
    }
    return true
}


const equal = compareObject(first2, secund2)
console.log(equal);