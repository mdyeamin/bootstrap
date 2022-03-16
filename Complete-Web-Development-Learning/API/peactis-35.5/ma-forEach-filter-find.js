// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো।
// map
const arr = ['ami', 'tumi', 'she', 'he', 'thay', 'it', 'that'];
// const arrMap = arr.map(arr => arr.length)
const arrMap = arr.map(x => x)
// console.log(arrMap);

// forEach
const arr2 = ['ami', 'tumi', 'she', 'he', 'thay', 'it', 'that'];
// const arrMap = arr.map(arr => arr.length)
arr2.forEach(arr2 => {
    // console.log(arr2);
})

// filter 

const arr3 = ['ami', 'tumi', 'she', 'ami', 'he', 'thay', 'ami', 'it', 'that'];

// const x = arr3.filter(array3 => array3 == 'ami')
const x = arr3.filter(array3 => array3.length == 3)
// console.log(x);


// find
const arr4 = ['ami', 'tumi', 'she', 'ami', 'he', 'thay', 'ami', 'it', 'that'];

const y = arr3.find(array3 => array3 == 'ami')
// const y = arr4.find(array4 => array4.length == 3)
console.log(y);
