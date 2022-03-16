// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো।



const myDetail = {
    name: 'yeamin',
    id: 33,
    age: 13,
    money: 1000,
    bestFrind: {
        name: 'jhankar',
        age: 16,
        money: 456546,
        skills: ['sinior web developer', 'programming related book author', 'A good man']
    },
    fevoriteSubjects: ['html', 'css', 'math', 'js', 'api', 'es6', 'react'],
    findAge: function (age) {
        console.log(age);
    }
}


const myName = `${myDetail.name} Is going to be ${myDetail.bestFrind.skills[0]}`

console.log(myName)