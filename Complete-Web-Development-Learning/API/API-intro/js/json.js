// javascript object notation
// JSON

const user = { id: 11, name: 'gorib amir', job: 'actor' };
const stringifide = JSON.stringify(user);
// console.log(user);
// console.log(stringifide);
const shop = {
    name: 'alia store',
    address: 'ranbir road',
    profit: 15000,
    products: ['laptop', 'mobail', 'pepsi'],
    owner: {
        name: 'alia batth',
        proffation: 'actor'
    },
    isExpensive: false
}
// console.log(shop);

const shopStringifide = JSON.stringify(shop);
console.log(shopStringifide);

const converted = JSON.parse(shopStringifide)
console.log(converted);