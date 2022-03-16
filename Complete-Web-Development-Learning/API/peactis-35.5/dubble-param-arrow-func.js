// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও।

const dualPara = (num1, num2) => {
    let sum = num1 + num2;
    return sum / 2;
}
console.log(dualPara(100, 10));

// normal function
// function dualPara(num1, num2) {
//     const d = num1 + num2
//     const v = d / 2;
//     return v
// }
// console.log(dualPara(100, 10));