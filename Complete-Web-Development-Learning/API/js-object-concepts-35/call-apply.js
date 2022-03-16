const kibria = {
    id: 101,
    name: 'RJ kibria',
    money: 5000,

    treatDay: function (expence, boksish) {
        this.money = this.money - expence - boksish;
        console.log(this);
        return this.money
    }
}
const heroBalam = {
    id: 102,
    money: 6000,
    name: 'hero balam'
}
const normalGolam = {
    id: 103,
    money: 8000,
    name: 'normal golam'
}
kibria.treatDay.call(heroBalam, 500, 50)

kibria.treatDay.apply(normalGolam, [100, 100, 100])