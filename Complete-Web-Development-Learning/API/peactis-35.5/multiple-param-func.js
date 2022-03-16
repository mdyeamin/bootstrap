// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
const numtiple = (num1, num2) => {
    const addSeven1 = num1 + 7;
    const addSeven2 = num2 + 7;
    const totalAdd = addSeven1 + addSeven2;
    return totalAdd;
}
const valuePass = numtiple(20, 15);
console.log(valuePass);