const kibria = {
    id: 101,
    name: 'RJ kibria',
    money: 5000,

    treatDay: function (expence) {
        this.money = this.money - expence;
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


kibria.treatDay(100)

const heroTreat = kibria.treatDay.bind(heroBalam)

heroTreat(100)

const golamTreat = kibria.treatDay.bind(normalGolam);
golamTreat(2000)