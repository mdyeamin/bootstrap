// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো।


const myDetail = {
    mane: 'yeamin',
    id: 33,
    age: 13,
    money: 1000,
    bestFrind: {
        name: 'jhankar',
        age: 16,
        money: 456546,
        skills: ['sinior web dev', 'programming related book author', 'A good man']
    },
    fevoriteSubjects: ['html', 'css', 'math', 'js', 'api', 'es6', 'react'],
    findAge: function (age) {
        console.log(age);
    }
}
// const getAge = myDetail.bestFrind.age;
// console.log(getAge);

const myBestFreindWorkSkill = myDetail.bestFrind.skills[0];
console.log(myBestFreindWorkSkill);