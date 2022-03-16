// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
// object destructuring
const myObj = {
    name: 'robiul',
    age: 9,
    address: 'Dhaka',
    position: 'child'
}
const { name, position } = myObj;
// console.log(name, position);
//array destructuring
const arr = [23, 90000, 356, 87];
const [id, balance] = arr
// const balance = arr[1]
console.log(balance);